import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  private apiUrl = 'https://hospital-api-springboot-583db87e37f7.herokuapp.com/api'
  constructor(private http:HttpClient) { }

  createTreatment(doctorUsername:string | undefined,
                  nurseUsername:string | undefined,
                  patientUsername:string | undefined,
                  medicinesName:string | undefined,
                  treatmentName:string | undefined,
                   treatmentNumber:string | undefined,
                   treatmentType:string | undefined,
                   treatmentDate:string | undefined,
                   treatmentDescription:string | undefined,
                   ):Observable<any>{
    const data = {
      treatment:{
        treatmentName:treatmentName,
        treatmentNumber:treatmentNumber,
        treatmentType:treatmentType,
        treatmentDate:treatmentDate,
        treatmentDescription:treatmentDescription,
      },
      doctorUsername:doctorUsername,
      nurseUsername:nurseUsername,
      patientUsername:patientUsername,
      medicinesName:medicinesName,
    }
    return this.http.post<any>(`${this.apiUrl}/treatment/create`,data)
  }

  getTreatment():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/treatment/all`)
  }

  getTreatmentUserId(userId: number): Observable<any> { // تم تعديل الدالة لتقبل معرف الطبيب
    return this.http.get<any>(`${this.apiUrl}/treatment/user/${userId}`);
  }

  deleteTreatment(treatmentId:number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/treatment/${treatmentId}`);
  }
}
