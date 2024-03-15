import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../service/appointment/appointment.service";
import {Router} from "@angular/router";
import {DoctorService} from "../../../service/user/doctor/doctor.service";
import {Doctor} from "../manage-doctor/manage-doctor.component";
import {NurseService} from "../../../service/user/nurse/nurse.service";
import {PatientService} from "../../../service/user/patient/patient.service";
import {Nurses} from "../manage-nurse-admin/manage-nurse-admin.component";
import {Patient} from "../manage-patient-admin/manage-patient-admin.component";

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

  public doctorName:string | undefined;
  public nursesName:string | undefined;
  public patientName:string | undefined;
  public appointmentNumber:string | undefined;
  public appointmentType:string | undefined;
  public appointmentDate:string | undefined;
  public appointmentDescription:string | undefined;

  constructor(private appointmentService:AppointmentService,
              private doctorService: DoctorService,
              private nursesService: NurseService,
              private patientService: PatientService,
              private router:Router) {
  }

  ngOnInit() {
    // استدعاء خدمة الأطباء للحصول على قائمة الأطباء عند تهيئة المكون
    this.doctorService.getDoctorAll().subscribe(
      (data) => {
        this.doctors = data;
      },
      (error) => {
        console.error('Error fetching doctors');
      }
    );
    this.nursesService.getNurseAll().subscribe(
      (data) => {
        this.nurses = data;
      },
      (error) => {
        console.error('Error fetching nurses');
      }
    );
    this.patientService.getPatientAll().subscribe(
      (data) => {
        this.patient = data;
      },
      (error) =>{
        console.error('Error fetching patient');
      }
    )

    this.appointmentService.getAppointment().subscribe(
      (data) => {
        this.appointment = data;
      },
      (error) => {
        console.error('Error fetching appointment');
      }
    )
  }

  createAppointment():void{
    this.appointmentService.createAppointment(this.doctorName,this.nursesName,this.patientName,
      this.appointmentNumber,this.appointmentType,
      this.appointmentDate,this.appointmentDescription).subscribe(
      {}
    );
    this.router.navigate(['/admin-layout/manage-appointment-admin'])
  }

}

export interface Appointment{
  id:number,
  appointment_number:string,
  appointment_type:string,
  appointment_date:string,
  appointment_description:string
  doctor:{
    doctorName:string,
  }
  nurses:{
    nurseName:string,
  }
  patient:{
    patientName:string
  }

}
