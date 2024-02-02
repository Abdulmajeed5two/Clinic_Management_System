import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contactM } from '../user/model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseApiUrl: string = environment.baseApiUrl;
  userData:contactM = new contactM();

  
  constructor(private http: HttpClient) { }

  GetAllContact(): Observable<contactM[]>
  {
    return this.http.get<contactM[]>(this.baseApiUrl + 'api/contact')
  }

  Savecontact()
  {
    return this.http.post(this.baseApiUrl + 'api/contact', this.userData);
  }

}
