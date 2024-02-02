import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { contactM } from '../model/contact.model';

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
        this.router.navigate(['/contact']);
      }
    })
  }

  submit(form:NgForm)
{
//console.log("working");
this.insertemployee(form);
}
insertemployee(myform:NgForm)
{
  this.Contactservice.Savecontact().subscribe(d=>{
    this.resetform(myform);
    this.refreshdata();

  });
}
resetform(myform:NgForm)
{
  myform.form.reset();
  this.Contactservice.userData= new contactM();
}
refreshdata()
{
  this.Contactservice.GetAllContact()
    .subscribe({
      next: (contact)=>{
        this.contact = contact;
      },
      error:(Response) =>{
        console.log();
      }
    })
}

}
