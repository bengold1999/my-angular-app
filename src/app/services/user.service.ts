import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({ // important soo we could use this service in the root app, have access to it
    providedIn: 'root'
  })
export class UserService {
    getUser() : User {
        return {
            name:"Satoshi Nakamoto",
            coins: 100,
            moves: []
        }
    }

}