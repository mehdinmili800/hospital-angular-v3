import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  private apiUrl = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }

  createTreatment(doctorName:string | undefined,
                   patientName:string | undefined,
                   medicineName:string | undefined,
                   treatmentName:string | undefined,
                   treatmentNumber:string | undefined,
                   treatmentType:string | undefined,
                   treatmentDate:string | undefined,
                   treatmentDescription:string | undefined,
                   ):Observable<any>{
    const data = {doctorName,patientName,medicineName,treatmentName,
    treatmentNumber,treatmentType,treatmentDate,treatmentDescription}
    return this.http.post<any>(`${this.apiUrl}/treatment/create`,data)
  }

  getTreatment():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/treatment/all`)
  }
}
