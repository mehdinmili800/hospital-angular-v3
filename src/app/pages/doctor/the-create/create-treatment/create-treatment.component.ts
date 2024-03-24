import {Component, OnInit} from '@angular/core';
import {TreatmentService} from "../../../../service/treatment/treatment.service";
import {Router} from "@angular/router";
import {DoctorService} from "../../../../service/user/doctor/doctor.service";
import {PatientService} from "../../../../service/user/patient/patient.service";
import {MedicinesService} from "../../../../service/medicines/medicines.service";
import {Medicines} from "../../../../modules/medicines";
import {Treatment} from "../../../../modules/treatment";
import {UserService} from "../../../../service/user/user/user.service";
import {User} from "../../../../modules/user";
import {Hospital} from "../../../../modules/hospital";

@Component({
  selector: 'app-create-treatment',
  templateUrl: './create-treatment.component.html',
  styleUrls: ['./create-treatment.component.css']
})
export class CreateTreatmentComponent implements OnInit{

  treatment:Treatment[]=[];

  medicine:Medicines[]=[];

  doctors: User[] = [];
  nurse: User[] = [];
  patient: User[] = [];

  filteredTreatment: Treatment[]=[];
  searchTerm:string = '';

  selectedTreatment: Treatment | null = null;

  currentPage = 1;
  itemsPerPage = 10;

  public doctorUsername:string | undefined;
  public nurseUsername:string | undefined;
  public patientUsername:string | undefined;
  public medicinesName:string | undefined;
  public treatmentName:string | undefined;
  public treatmentNumber:string | undefined;
  public treatmentType:string | undefined;
  public treatmentDate:string | undefined;
  public treatmentDescription:string | undefined;

  constructor(private treatmentService:TreatmentService,
              private userService:UserService,
              private medicineService:MedicinesService,
              private router:Router) {
  }

  get totalPages(): number {
    return Math.ceil(this.treatment.length / this.itemsPerPage);
  }

  prevPage():void{
    if (this.currentPage > 1){
      this.currentPage--;
    }
  }

  nextPage():void{
    if (this.currentPage < this.totalPages){
      this.currentPage++;
    }
  }
  ngOnInit() {
    this.medicineService.getMedicine().subscribe(
      (data) => {
        this.medicine = data;
      },
      (error) =>{
        console.error('Error fetching medicines');

      }
    )

      this.userService.getUserInfo().subscribe(user => {
          this.treatmentService.getTreatmentUserId(user.id).subscribe( treatment => {
            this.treatment = treatment.reverse();
            this.filteredTreatment = [...this.treatment];
            this.searchTreatment();
          })
        }
      )


    this.getUserDoctor();
    this.getUserNurse();
    this.getUserPatient();
  }




  searchTreatment():void{
    if (!this.searchTerm) {
      this.filteredTreatment = [...this.treatment];
    } else {
      this.filteredTreatment = this.treatment.filter(user =>
        user.treatmentName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.patient.username.toLowerCase().includes(this.searchTerm.toLowerCase())

      );
    }
    this.currentPage = 1; // Reset current page when search is performed
  }

  getUserDoctor():void{
    this.userService.getAllUsers()
      .subscribe(
        (users:User[]) =>{
          this.doctors = users.filter(user => user.role === 'ROLE_DOCTOR');
        },
        (error) => {
          console.error('error for get doctor', error)
        }
      )
  }

  getUserNurse():void{
    this.userService.getAllUsers()
      .subscribe(
        (users:User[]) =>{
          this.nurse = users.filter(user => user.role === 'ROLE_NURSES');
        },
        (error) => {
          console.error('error for get nurse', error)
        }
      )
  }

  getUserPatient():void{
    this.userService.getAllUsers()
      .subscribe(
        (users:User[]) =>{
          this.patient = users.filter(user => user.role === 'ROLE_PATIENT');
        },
        (error) => {
          console.error('error for get patient', error)
        }
      )
  }



  createTreatment():void{
    this.treatmentService.createTreatment(this.doctorUsername,this.nurseUsername,
      this.patientUsername,this.medicinesName,
      this.treatmentName,this.treatmentNumber,this.treatmentType,
      this.treatmentDate,this.treatmentDescription).subscribe(
      {}
    );
    this.router.navigate(['/doctor-layout/create-treatment'])
    window.location.reload();
  }

  deleteTreatment(treatmentId:number):void{
    this.treatmentService.deleteTreatment(treatmentId).subscribe(
      () =>{
        console.log(`Appointment with ID ${treatmentId} has been deleted successfully.`);
      },
      (error) =>{
        console.error('An error occurred:', error);
      }
    )
    window.location.reload();
  }

  // Function to select hospital when clicked
  selectTreatment(treatment: Treatment): void {
    this.selectedTreatment = treatment;
  }

}



