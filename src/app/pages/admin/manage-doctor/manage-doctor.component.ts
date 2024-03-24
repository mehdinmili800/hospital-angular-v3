import {Component} from '@angular/core';
import {UserService} from "../../../service/user/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.css']
})
export class ManageDoctorComponent{


  public username: string | undefined;
  public password: string | undefined;
  public role: string | undefined;

  constructor(private userService:UserService,
              private router:Router) {
  }



  createUser(): void{
    this.userService.createUser(this.username,this.password,this.role).subscribe(
      () => {
        if (this.role === 'ROLE_DOCTOR'){
          this.router.navigate(['/admin-layout/manage-doctor-admin'],
            {queryParams:{username:this.username}});
        }
      }
    )
    window.location.reload();
  }

}
