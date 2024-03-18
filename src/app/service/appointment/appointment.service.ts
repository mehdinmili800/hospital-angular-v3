import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }

  createAppointment(doctorName:string | undefined,
                    nurseName:string | undefined,
                    patientName:string | undefined,
                    hospitalName:string | undefined,
                    appointmentNumber:string | undefined,
                    appointmentType:string | undefined,
                    appointmentDate:string | undefined,
                    appointmentDescription:string | undefined,
                     ) : Observable<any>{
    const data = {doctorName,nurseName,patientName,hospitalName,
      appointmentNumber,appointmentType,appointmentDate,
      appointmentDescription}
    return this.http.post<any>(`${this.apiUrl}/appointment/create` ,data);
  }

  getAppointment(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/appointment/all`)
  }
}
