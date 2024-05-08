import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, switchMap } from 'rxjs';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

    user$: Observable<User> = this.userService.loggedInUser$
    
    BTC$: Observable<string> = this.user$.pipe(
        filter(user => !!user),
        switchMap(user => this.bitcoinService.getRateStream(user.coins))
    )
    userMoves$: Observable<Move[]> = this.user$.pipe(
        filter(user => !!user),
        map(user => user.moves.slice(0, 3))
    )



    constructor(
        private userService: UserService,
        private bitcoinService: BitcoinService
    ) { }

}
