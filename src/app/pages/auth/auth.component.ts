import { Component } from '@angular/core';
import {AuthenticationService} from "../../service/user/auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public username: string | undefined ;
  public password: string | undefined ;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login(): void {
    this.authService.authenticate(this.username, this.password).subscribe(
      response => {
        // Check the user role from the authentication response
        const role = response.role;

        // Redirect based on user role
        if (role === 'ROLE_ADMIN') {
          this.router.navigate(['/admin-layout/manage-hospital-admin']); // Replace 'admin' with your admin route
        } else if (role === 'ROLE_DOCTOR') {
          this.router.navigate(['/doctor-layout']); // Replace 'teacher' with your teacher route
        } else if (role === 'ROLE_EMPLOYEE') {
          this.router.navigate(['/employee-layout']); // Replace 'student' with your student route
        }

      },
      error => {
        // Handle login error
        console.error(error);
      }
    );
  }
}
