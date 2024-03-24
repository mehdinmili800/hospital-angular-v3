import { Component } from '@angular/core';
import {AuthenticationService} from "../../service/user/auth/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public username: string = 'mehdi' ;
  public password: string = 'nmili' ;

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
          this.router.navigate(['/admin-layout']); // Replace 'admin' with your admin route
        } else if (role === 'ROLE_DOCTOR') {
          this.router.navigate(['/doctor-layout']); // Replace 'teacher' with your doctor route
        } else if (role === 'ROLE_EMPLOYEE') {
          this.router.navigate(['/employee-layout']); // Replace 'student' with your employee route
        } else if (role === 'ROLE_PATIENT') {
          this.router.navigate(['/patient-layout']); // Replace 'student' with your patient route
        }
        else if (role === 'ROLE_NURSES') {
          this.router.navigate(['/nurse-layout']); // Replace 'student' with your patient route
        }


      },
      error => {
        // Handle login error
        console.error(error);
      }
    );
  }
}
