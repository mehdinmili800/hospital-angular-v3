import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user/user.service";
import {PatientService} from "../../../service/user/patient/patient.service";
import {NurseService} from "../../../service/user/nurse/nurse.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-nurse-admin',
  templateUrl: './manage-nurse-admin.component.html',
  styleUrls: ['./manage-nurse-admin.component.css']
})
export class ManageNurseAdminComponent implements OnInit{

  nurses:Nurses[] = [];



  public username:string | undefined;
  public password:string | undefined;
  public role: string | undefined;

  constructor(private userService: UserService,
              private nurseService:NurseService,
              private router:Router) {
  }

  ngOnInit() {
    this.nurseService.getNurseAll().subscribe(
      (data) => {
        this.nurses = data;
      },
      (error) =>{
        console.error('Error fetching patient:', error)
      }
    )
  }

  createUser():void {
    this.userService.createUser(this.username,this.password,this.role).subscribe(
      () => {
        if (this.role === 'ROLE_NURSES'){
          this.router.navigate(['/admin-layout/form-second-nurses'],
            {queryParams:{username: this.username}});
        }
      }
    )
  }
}

export interface Nurses {
  id: number,
  nurses: {
    id: number,
    username: string,
  }
  nurseName: string,
  nurse_duty_hour: string,
  nurse_mobile: string,
  nurse_email: string,
  nurse_address:string,
}
