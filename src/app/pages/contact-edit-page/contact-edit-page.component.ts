import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { filter, lastValueFrom, map, take } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
    selector: 'contact-edit-page',
    templateUrl: './contact-edit-page.component.html',
    styleUrls: ['./contact-edit-page.component.scss'],
})
export class ContactEditPageComponent implements OnInit {

    contact: Partial<Contact> = this.contactService.getEmptyContact()

    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.data
            .pipe(
                map(data => data['contact']),
                filter(contact => !!contact)
            )
            .subscribe((contact) => {
                this.contact = contact
            })

    }

    async onSaveContact() {
        this.contactService.saveContact(this.contact as Contact)
            .pipe(take(1))
            .subscribe({
                next: () => this.router.navigateByUrl('/contacts'),
                error: err => console.log('err:', err)
            })
    }
}
