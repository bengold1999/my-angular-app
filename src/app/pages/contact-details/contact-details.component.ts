import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, firstValueFrom, map, switchMap } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    @Input() contactId!: string
    // @Output() Back = new EventEmitter()
    
    contact$: Observable<Contact> = this.route.data.pipe(map(data => data['contact']))

    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    // contact: Contact

    // constructor(private contactService: ContactService) { }


    ngOnInit(): void {
            this.contact$ = this.route.params.pipe(
            switchMap(params => this.contactService.getContactById(params['id']))
            )
        

    }

    onBack() {
        this.router.navigateByUrl('/contacts')
    }

    ngOnDestroy(): void {
    }

    // async ngOnInit(): Promise<void> {
    //     this.contact$ = this.contactService.getContactById(this.contactId)
    // }

}
