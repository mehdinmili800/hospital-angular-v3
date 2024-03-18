import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../token/TokenStorageService";

@Component({
  selector: 'app-navbar-doctor',
  templateUrl: './navbar-doctor.component.html',
  styleUrls: ['./navbar-doctor.component.css']
})
export class NavbarDoctorComponent {


  constructor(private router:Router,
              private tokenStorageService: TokenStorageService ) {
  }

  logout(): void {
    // Remove the token from local storage upon logout
    this.tokenStorageService.removeToken();
    this.tokenStorageService.removeUserId();
    this.router.navigate(['/auth']);
  }
}
