import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private apiUrl = 'https://hospital-api-springboot-583db87e37f7.herokuapp.com/api'
  constructor(private http:HttpClient) { }

  createMedicine(medicineName:string | undefined,
                 medicine_company:string | undefined,
                 medicine_composition:string | undefined,
                 medicine_cost:string | undefined,
                 medicine_type:string | undefined,
                 medicine_dose:string | undefined,
                 medicine_description:string | undefined,) : Observable<any>{
    const data = {medicineName,medicine_company,medicine_composition,
      medicine_cost,medicine_type,medicine_dose,medicine_description}
    return this.http.post<any>(`${this.apiUrl}/medicines/create` ,data);
  }

  getMedicine(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/medicines/all`)
  }

  deleteMedicines(medicinesId:number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/medicines/${medicinesId}`)
  }
}
