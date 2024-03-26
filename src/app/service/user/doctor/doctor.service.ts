import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, switchMap, throwError} from "rxjs";
import {TokenStorageService} from "../../../token/TokenStorageService";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'https://hospital-api-springboot-583db87e37f7.herokuapp.com/api';

  constructor(private http:HttpClient,
              private tokenStorageService: TokenStorageService,
              private userService: UserService,) { }

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



  getDoctorInfo(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/doctors/${userId}`);
  }


}
