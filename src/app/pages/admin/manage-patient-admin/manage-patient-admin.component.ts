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

  constructor(private patientService:PatientService,
              private userService: UserService,
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

  onDeleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          // Handle success, such as refreshing user list or removing the deleted user
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
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
