import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, throwError} from "rxjs";
import {TokenStorageService} from "../../../token/TokenStorageService";
import {Doctor} from "../../../pages/admin/manage-doctor/manage-doctor.component";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http:HttpClient,
              private tokenStorageService: TokenStorageService) { }

  createDoctor(username:string | undefined,
               doctorName:string | undefined,
               doctor_specialist:string | undefined,
               doctor_mobile:string | undefined,
               doctor_email:string | undefined,
               doctor_address:string | undefined) : Observable<any>{
    const data = {username,doctorName,doctor_specialist,
    doctor_mobile,doctor_email,doctor_address}
    return this.http.post<any>(`${this.apiUrl}/doctor/create`,data)
  }

  getDoctorAll(): Observable<any>{
    return this.http.get(`${this.apiUrl}/doctors/all`);
  }


  getDoctorInfo(): Observable<any> {
    const userId = this.tokenStorageService.getUserId(); // Retrieve user ID from local storage
    return this.http.get<any>(`${this.apiUrl}/doctors/${userId}`);
  }

}
