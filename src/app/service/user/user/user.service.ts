import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenStorageService} from "../../../token/TokenStorageService";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://hospital-api-springboot-583db87e37f7.herokuapp.com/api'

  constructor(private http:HttpClient,private tokenStorageService:TokenStorageService) { }

  createUser(username:string | undefined,
             password:string | undefined,
             role:string | undefined):Observable<any>{
    const data = {username,password,role};
    return this.http.post<any>(`${this.apiUrl}/user/create`,data);
  }



  getUserInfo(): Observable<any> {
    const userId = this.tokenStorageService.getUserId(); // Retrieve user ID from local storage
    return this.http.get<any>(`${this.apiUrl}/user/${userId}`);
  }

  getAllUsers(): Observable<any>{
    return this.http.get(`${this.apiUrl}/user/all`);
  }


  deleteUser(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/user/${userId}`);
  }
}



