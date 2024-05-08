import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    // isLoggedIn = this.userService.loggedInUser$.pipe(map(user => !!user))
    loggedInUser$ = this.userService.loggedInUser$

    onLogout() {
        this.userService.logout()
            .pipe(take(1))
            .subscribe({
                next: () => this.router.navigate(['/signup']),
                error: (err) => console.log('Error:', err),
            })
    }


}
