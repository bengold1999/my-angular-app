import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { MsgService } from 'src/app/services/msg.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'transfer-fund',
    templateUrl: './transfer-fund.component.html',
    styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {
    constructor(private msgService: MsgService) { }

    amount: number;
    user: User;

    @Input() contact: Contact;
    @Input() maxCoins: number;
    @Output() transferCoins = new EventEmitter();

    onTransferCoins(): void {
        if (this.maxCoins < this.amount) {
            this.msgService.setErrorMsg('Not enough coins!')
        } else {
            this.transferCoins.emit(this.amount);
        }
        this.amount = null

    }
}
