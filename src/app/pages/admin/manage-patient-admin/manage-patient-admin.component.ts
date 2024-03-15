import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user/user.service";
import { Router} from "@angular/router";
import {PatientService} from "../../../service/user/patient/patient.service";

@Component({
  selector: 'app-manage-patient-admin',
  templateUrl: './manage-patient-admin.component.html',
  styleUrls: ['./manage-patient-admin.component.css']
})
export class ManagePatientAdminComponent implements OnInit{


  patient:Patient[] = [];


  public username: string | undefined;
  public password: string | undefined;
  public role: string | undefined;

  constructor(private userService: UserService,
              private patientService:PatientService,
              private router:Router) {
  }

  ngOnInit() {
    this.patientService.getPatientAll().subscribe(
      (data) => {
        this.patient = data;
      },
      (error) =>{
        console.error('Error fetching patient:', error);
      }
    )
  }

  createUser(): void{
    this.userService.createUser(this.username,this.password,this.role).subscribe(
      () => {
        if (this.role === 'ROLE_PATIENT'){
          this.router.navigate(['/admin-layout/form-second-patient'],
            {queryParams:{username: this.username}});
        }
      }
    )
  }


}

export interface Patient{
  id:number,
  patient:{
    id:number,
    username:string,
  }
  patientName:string,
  patient_mobile:string,
  patient_email:string,
  patient_address:string

}
