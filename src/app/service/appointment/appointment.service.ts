import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }

  createAppointment(
    doctorUsername: string | undefined, nurseUsername: string | undefined, patientUsername: string | undefined, hospitalName: string | undefined,
    appointmentNumber: string | undefined, appointmentType: string | undefined, appointmentDate: string | undefined, appointmentDescription: string | undefined
  ): Observable<any> {
    const data = {
      appointment: {
        appointmentNumber: appointmentNumber,
        appointmentType: appointmentType,
        appointmentDate: appointmentDate,
        appointmentDescription: appointmentDescription
      },
      doctorUsername: doctorUsername,
      nurseUsername: nurseUsername,
      patientUsername: patientUsername,
      hospitalName: hospitalName
    };

    return this.http.post<any>(`${this.apiUrl}/appointment/create`, data);
  }

  getAppointment(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/appointment/all`)
  }

  getAppointments(userId: number): Observable<any> { // تم تعديل الدالة لتقبل معرف الطبيب
    return this.http.get<any>(`${this.apiUrl}/appointment/user/${userId}`);
  }

  deleteAppointment(appointmentId: number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/appointment/${appointmentId}`);
  }
}
