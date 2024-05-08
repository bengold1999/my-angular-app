import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';
import { Move } from '../models/move.model';

@Pipe({
    name: 'getContactMoves'
})
export class GetContactMovesPipe implements PipeTransform {
    transform(user: User, contactId: string): Move[] {
        return user.moves.filter(move => move.toId === contactId);
    }

}
