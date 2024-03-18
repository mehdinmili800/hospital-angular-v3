import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../token/TokenStorageService";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {


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
