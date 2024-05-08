import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';

@Component({
    selector: 'move-list',
    templateUrl: './move-list.component.html',
    styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnChanges {

    _contact!: Contact
    title: string = ''

    @Input() moves!: Move[]
    @Input() set contact(contact: Contact | null) {
        if (contact) this.title = 'Your moves to ' + contact.name.substring(0, contact.name.indexOf(' ') + 1)
        else this.title = 'Last 3 moves'
        this._contact = contact
    }

    ngOnChanges(changes: SimpleChanges): void {
        
    }




}
