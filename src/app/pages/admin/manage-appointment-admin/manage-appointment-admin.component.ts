import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../service/appointment/appointment.service";
import {Router} from "@angular/router";
import {DoctorService} from "../../../service/user/doctor/doctor.service";
import {Doctor} from "../manage-doctor/manage-doctor.component";
import {NurseService} from "../../../service/user/nurse/nurse.service";
import {PatientService} from "../../../service/user/patient/patient.service";
import {Nurses} from "../manage-nurse-admin/manage-nurse-admin.component";
import {Patient} from "../manage-patient-admin/manage-patient-admin.component";
import {Hospital} from "../manage-hospital-admin/manage-hospital-admin.component";
import {Appointment} from "../../employee/work-hospital/create-appointment/create-appointment.component";

@Component({
  selector: 'app-manage-appointment-admin',
  templateUrl: './manage-appointment-admin.component.html',
  styleUrls: ['./manage-appointment-admin.component.css']
})
export class ManageAppointmentAdminComponent implements OnInit{

  appointment:Appointment[] =[];
  // تحديد قائمة الأطباء
  doctors: Doctor[] = [];
  nurses: Nurses[] = [];
  patient: Patient[] = [];
  hospital:Hospital[]=[];



  constructor(private appointmentService:AppointmentService) {
  }

  ngOnInit() {
    this.appointmentService.getAppointment().subscribe(
      (data) => {
        this.appointment = data;
      },
      (error) => {
        console.error('Error fetching appointment');
      }
    )
  }




}
