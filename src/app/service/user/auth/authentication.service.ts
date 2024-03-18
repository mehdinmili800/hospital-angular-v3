import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {TokenStorageService} from "../../../token/TokenStorageService";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api/auth'; // Update with your API URL
  private userId: number | undefined;

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
  ) {}

  authenticate(username: string | undefined, password: string | undefined): Observable<any> {
    const credentials = { username, password };
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials)
      .pipe(tap(response => {
        // Save token and user ID to local storage upon successful login
        this.tokenStorageService.saveToken(response.access_token);
        this.tokenStorageService.saveUserId(response.id); // Save user ID
      }));
  }




}
