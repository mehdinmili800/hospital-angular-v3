import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NurseService {

  private apiUrl = 'https://hospital-api-springboot-583db87e37f7.herokuapp.com/api';

  constructor(private http:HttpClient) { }

  createNurse(username:string | undefined,
              nurseName:string | undefined,
              nurse_duty_hour:string |undefined,
              nurse_mobile:string | undefined,
              nurse_email:string | undefined,
              nurse_address:string | undefined): Observable<any> {
    const data = {username,nurseName,nurse_duty_hour,nurse_mobile,
    nurse_email,nurse_address}
    return this.http.post<any>(`${this.apiUrl}/nurses/create`,data);
  }

  getNurseAll():Observable<any>{
    return this.http.get(`${this.apiUrl}/nurses/all`)
  }


}
