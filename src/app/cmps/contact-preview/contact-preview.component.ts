import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

    @Input() contact: Contact
    @Output() onSelect = new EventEmitter<string>()
    constructor(
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute
    ) { }
    ngOnInit(): void {
    }

    onSelectContact() {
        this.router.navigate([`/contacts/${this.contact._id}`])
    }

}
