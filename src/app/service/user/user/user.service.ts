import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenStorageService} from "../../../token/TokenStorageService";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api'

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


}



