import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
) { }




  contact = this.contactService.getEmptyContact()

  ngOnInit(): void {
    this.route.data.pipe(
      map(data => data['contact']),
      filter(contact => contact),
    ).subscribe(contact => {
      this.contact = contact
    })
  }


  // onSavecontact() {
  //   this.ContactService.save(this.contact as Contact)
  //     .subscribe({
  //       next: () => this.router.navigateByUrl('/contact'),
  //       error: err => console.log('err:', err)
  //     })
  // }
}


