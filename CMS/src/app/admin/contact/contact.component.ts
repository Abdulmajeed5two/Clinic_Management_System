import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { contactM } from 'src/app/user/model/contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



constructor(public Contactservice: ContactService, private router: Router) { }
contact : contactM[] = [];

  ngOnInit(): void {

    this.Contactservice.GetAllContact()
    .subscribe({
      next: (contact)=>{
        this.contact = contact;
      },
      error:(Response) =>{
        this.router.navigate(['/admin/contact']);
      }
    })

  }

}
