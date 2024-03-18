import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user/user.service";
import {DoctorService} from "../../../service/user/doctor/doctor.service";
import {Router} from "@angular/router";
import {Appointment} from "../../employee/work-hospital/create-appointment/create-appointment.component";

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.css']
})
export class ManageDoctorComponent implements OnInit{

  doctor:Doctor[] = [];

  public username: string | undefined;
  public password: string | undefined;
  public role: string | undefined;

  constructor(private userService:UserService,
              private doctorService:DoctorService,
              private router:Router) {
  }

  ngOnInit() {
    this.doctorService.getDoctorAll().subscribe(
      (data) => {
        this.doctor = data;
      },
      (error) =>{
        console.error('Error fetching doctor',error);
      }
    )
  }

  createUser(): void{
    this.userService.createUser(this.username,this.password,this.role).subscribe(
      () => {
        if (this.role === 'ROLE_DOCTOR'){
          this.router.navigate(['/admin-layout/form-second-doctor'],
            {queryParams:{username:this.username}});
        }
      }
    )
  }


}

export interface Doctor{
  id:number,
  doctor:{
    id:number,
    username:string,
  }
  doctorName:string,
  doctor_specialist:string,
  doctor_mobile:string,
  doctor_email:string,
  doctor_address:string,
  appointments: Appointment[];
}
