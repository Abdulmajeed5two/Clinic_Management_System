import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { medicines } from '../admin/models/medicines.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  
  baseApiUrl: string = environment.baseApiUrl;

  medicineData:medicines = new medicines();

  constructor(private http: HttpClient) { }

  GetAllMedicines(): Observable<medicines[]>
  {
    return this.http.get<medicines[]>(this.baseApiUrl + 'api/medicine')
  }


  // addmedicine(addMedicineRequest: medicines): Observable<medicines[]>
  // {
  //  return this.http.post<medicines[]>(this.baseApiUrl + '/api/medicine',addMedicineRequest)
  // }

  Savemedicine()
  {
    return this.http.post(this.baseApiUrl + 'api/medicine', this.medicineData);
  }
}
