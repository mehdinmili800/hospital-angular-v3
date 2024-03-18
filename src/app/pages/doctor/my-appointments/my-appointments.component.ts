import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../admin/manage-doctor/manage-doctor.component";
import {DoctorService} from "../../../service/user/doctor/doctor.service";

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit{


  doctor:Doctor[] = [];

  constructor(
    private doctorService:DoctorService,
  ) {}

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
}
