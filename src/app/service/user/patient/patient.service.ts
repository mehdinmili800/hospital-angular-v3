import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }

  createPatient(username:string | undefined,
                patientName:string | undefined,
                patient_mobile:string | undefined,
                patient_email:string | undefined,
                patient_address:string | undefined) : Observable<any>{
    const  data = {username,patientName,patient_mobile,patient_email,patient_address};
    return this.http.post<any>(`${this.apiUrl}/patient/create`,data);
  }

  getPatientAll(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/patients/all`);
  }
}
