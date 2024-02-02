import { Component, OnInit } from '@angular/core';
import { medicines } from '../models/medicines.model';
import { MedicineService } from 'src/app/services/medicine.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit {

  // addMedicineRequest: medicines ={
  //   id:'',
  //   medicine_Name:'',
  //   medicine_Price:'',
  //   medicine_Type:'',
  //   medicine_Description:'
  // }


  constructor(public medicineservice: MedicineService, private router: Router) { }

  medcines : medicines[] = [];

  ngOnInit(): void 
  {
    this.medicineservice.GetAllMedicines()
    .subscribe({
      next: (medcines)=>{
        this.medcines = medcines;
      },
      error:(Response) =>{
        this.router.navigate(['/medicines']);
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
  this.medicineservice.Savemedicine().subscribe(d=>{
    this.resetform(myform);
    this.refreshdata();

  });
}
resetform(myform:NgForm)
{
  myform.form.reset();
  this.medicineservice.medicineData= new medicines();
}
refreshdata()
{
  this.medicineservice.GetAllMedicines()
    .subscribe({
      next: (medcines)=>{
        this.medcines = medcines;
      },
      error:(Response) =>{
        this.router.navigate(['/medicines']);
      }
    })
}
}


  // addmedicine()
  // {
  //   this.medicineservice.addmedicine(this.addMedicineRequest)
  //   .subscribe({
  //     next:(medicine)=>{
  //       console.log(medicine);
  //     }
  //   });
  // }


