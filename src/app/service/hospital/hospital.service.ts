import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private apiUrl = 'https://hospital-api-springboot-583db87e37f7.herokuapp.com/api'
  constructor(private http:HttpClient) { }

  createHospital(hospitalName:string | undefined,
                 hospital_place:string | undefined,
                 hospital_type:string | undefined,
                 hospital_description:string | undefined,
                 hospital_address:string | undefined) : Observable<any>{
    const data = {hospitalName,hospital_place,hospital_type,
      hospital_description,hospital_address}
    return this.http.post<any>(`${this.apiUrl}/hospital/create` ,data);
  }

  getHospitals(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/hospitals/all`)
  }

  deleteHospital(hospitalId:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/hospital/${hospitalId}`)
  }
}
