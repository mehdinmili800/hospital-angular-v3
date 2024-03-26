import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://hospital-api-springboot-583db87e37f7.herokuapp.com/api'
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
