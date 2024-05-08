import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, Subscription, combineLatest, filter, map, of, take, tap } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { MsgService } from 'src/app/services/msg.service'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private msgService: MsgService,
        private router: Router) {
    }

    subscription!: Subscription
    contact: Contact | null = null

    contact$ = this.route.data.pipe(map(data => data['contact']))
    user$ = this.userService.loggedInUser$
    contactMoves$ = combineLatest([this.user$, this.contact$]).pipe(
        filter(([user]) => !!user),
        map(([user, contact]) => user?.moves.filter(move => move.toId === contact._id))
    )

    ngOnInit(): void {
        this.subscription = this.contact$.subscribe(contact => this.contact = contact)
    }

    onTransferCoins(amount: number) {
        this.userService.addMove(this.contact, amount)
            .pipe(take(1))
            .subscribe({
                next: () => {
                    this.msgService.setSuccessMsg(`Transferred ${amount} coins to ${this.contact?.name}`)
                },
                error: (err) => console.log(err)
            })
    }

    onBack() {
        this.router.navigateByUrl('/contacts')
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }

    
}
