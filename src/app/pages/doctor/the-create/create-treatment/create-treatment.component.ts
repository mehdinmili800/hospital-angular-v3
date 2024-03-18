import {Component, OnInit} from '@angular/core';
import {Medicines} from "../../../admin/manage-medicines-admin/manage-medicines-admin.component";
import {Doctor} from "../../../admin/manage-doctor/manage-doctor.component";
import {Patient} from "../../../admin/manage-patient-admin/manage-patient-admin.component";
import {TreatmentService} from "../../../../service/treatment/treatment.service";
import {Router} from "@angular/router";
import {DoctorService} from "../../../../service/user/doctor/doctor.service";
import {PatientService} from "../../../../service/user/patient/patient.service";
import {MedicinesService} from "../../../../service/medicines/medicines.service";

@Component({
  selector: 'app-create-treatment',
  templateUrl: './create-treatment.component.html',
  styleUrls: ['./create-treatment.component.css']
})
export class CreateTreatmentComponent implements OnInit{

  treatment:Treatment[]=[];

  medicine:Medicines[]=[];
  doctors:Doctor[]=[];
  patient:Patient[]=[];

  public doctorName:string | undefined;
  public patientName:string | undefined;
  public medicineName:string | undefined;
  public treatmentName:string | undefined;
  public treatmentNumber:string | undefined;
  public treatmentType:string | undefined;
  public treatmentDate:string | undefined;
  public treatmentDescription:string | undefined;

  constructor(private treatmentService:TreatmentService,
              private doctorService:DoctorService,
              private patientService:PatientService,
              private medicineService:MedicinesService,
              private router:Router) {
  }

  ngOnInit() {
    this.doctorService.getDoctorAll().subscribe(
      (data) => {
        this.doctors = data;
      },
      (error) =>{
        console.error('Error fetching doctors');

      }
    )

    this.patientService.getPatientAll().subscribe(
      (data) => {
        this.patient = data;
      },
      (error) =>{
        console.error('Error fetching patients');

      }
    )

    this.medicineService.getMedicine().subscribe(
      (data) => {
        this.medicine = data;
      },
      (error) =>{
        console.error('Error fetching medicines');

      }
    )


    this.treatmentService.getTreatment().subscribe(
      (data) => {
        this.treatment = data;
      },
      (error) => {
        console.error('Error fetching appointment');
      }
    )
  }

  createTreatment():void{
    this.treatmentService.createTreatment(this.doctorName,this.patientName,this.medicineName,
      this.treatmentName,this.treatmentNumber,this.treatmentType,
      this.treatmentDate,this.treatmentDescription).subscribe(
      {}
    );
    this.router.navigate(['/doctor-layout/create-treatment'])
  }

}

export interface Treatment{
  id:number,
  treatmentName:string,
  treatmentNumber:string,
  treatmentType:string,
  treatmentDate:string,
  treatmentDescription:string,
  doctor:{
    doctorName:string,
  }
  patient:{
    patientName:string
  },
  medicines:{
    medicineName:string
  }
}
