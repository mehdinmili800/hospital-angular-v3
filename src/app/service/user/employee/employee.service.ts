import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/api'
  constructor(private http:HttpClient) { }


  createEmployee(username:string | undefined,
                 employeeName:string | undefined,
                 email:string | undefined,
                 phone:string | undefined,
                 ) : Observable<any>{
    const data = {username,employeeName,email,phone};
    return this.http.post<any>(`${this.apiUrl}/employee/create`,data);
  }

  getEmployeeAll(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/employee/all`)
  }
}
