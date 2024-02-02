import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicines } from 'src/app/admin/models/medicines.model';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss']
})
export class MedicineComponent implements OnInit {
  
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

}
