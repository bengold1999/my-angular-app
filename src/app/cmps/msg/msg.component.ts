import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Msg } from 'src/app/models/msg.model';
import { MsgService } from 'src/app/services/msg.service';

@Component({
    selector: 'msg',
    templateUrl: './msg.component.html',
    styleUrls: ['./msg.component.scss']
})
export class MsgComponent {

    constructor(private msgService: MsgService) { }
    msg$: Observable<Msg> = this.msgService.msg$

    onCloseMsg() {
        this.msgService.closeMsg()
    }
}
