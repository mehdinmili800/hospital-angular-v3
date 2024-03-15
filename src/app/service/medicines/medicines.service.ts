import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  private apiUrl = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }

  createMedicine(medicine_name:string | undefined,
                 medicine_company:string | undefined,
                 medicine_composition:string | undefined,
                 medicine_cost:string | undefined,
                 medicine_type:string | undefined,
                 medicine_dose:string | undefined,
                 medicine_description:string | undefined,) : Observable<any>{
    const data = {medicine_name,medicine_company,medicine_composition,
      medicine_cost,medicine_type,medicine_dose,medicine_description}
    return this.http.post<any>(`${this.apiUrl}/medicines/create` ,data);
  }

  getMedicine(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/medicines/all`)
  }
}
