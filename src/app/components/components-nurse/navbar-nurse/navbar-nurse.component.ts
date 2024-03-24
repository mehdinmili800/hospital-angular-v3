import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../token/TokenStorageService";

@Component({
  selector: 'app-navbar-nurse',
  templateUrl: './navbar-nurse.component.html',
  styleUrls: ['./navbar-nurse.component.css']
})
export class NavbarNurseComponent {



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
