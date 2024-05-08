import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { take } from 'rxjs';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {


    userName = '';
    
    constructor(
        private userService: UserService,
        private router: Router
    ) { }


    signUp(): void {
        this.userService.signup(this.userName)
            .pipe(take(1))
            .subscribe(() => {
                this.router.navigate(['']);
            });

    }
}
