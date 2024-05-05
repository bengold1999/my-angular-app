import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private contactService: ContactService) { }
    title = 'mister-bitcoin-try';
    currPage: string = 'home'

    ngOnInit(): void {
        this.contactService.loadContacts().subscribe({
            error: err => {
                console.log('err:', err)
            }
        })
    }

    toPage(pageName: string) {
        this.currPage = pageName;
    }
}
