import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../../service/appointment/appointment.service";
import {Router} from "@angular/router";
import {HospitalService} from "../../../../service/hospital/hospital.service";
import {Appointment} from "../../../../modules/appointment";
import {Hospital} from "../../../../modules/hospital";
import {UserService} from "../../../../service/user/user/user.service";
import {User} from "../../../../modules/user";

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit{

  appointment:Appointment[] =[];
  // تحديد قائمة الأطباء
  hospital: Hospital[] = [];

  doctors: User[] = [];
  nurse: User[] = [];
  patient: User[] = [];

  filteredAppointment: Appointment[]=[];
  searchTerm:string = '';

  currentPage = 1;
  itemsPerPage = 10;



  doctorUsername: string | undefined;
  nurseUsername: string | undefined;
  patientUsername: string | undefined;
  hospitalName: string | undefined;
  appointmentNumber: string | undefined;
  appointmentType: string | undefined;
  appointmentDate: string | undefined;
  appointmentDescription: string | undefined;

  constructor(private appointmentService:AppointmentService,
              private userService:UserService,
              private hospitalService:HospitalService,
              private router:Router) {
  }

  get totalPages(): number {
    return Math.ceil(this.appointment.length / this.itemsPerPage);
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


    this.appointmentService.getAppointment().subscribe(
      (data) => {
        this.appointment = data.reverse();
        this.filteredAppointment = [...this.appointment];
        this.searchAppointment();
      },
      (error) => {
        console.error('Error fetching appointment');
      }
    )

    this.hospitalService.getHospitals().subscribe(
      (data) => {
        this.hospital = data;

      },
      (error) => {
        console.error('Error fetching hospital')
      }
    )

    this.getUserDoctor();
    this.getUserNurse();
    this.getUserPatient();
  }

  searchAppointment():void{
    if (!this.searchTerm) {
      this.filteredAppointment = [...this.appointment];
    } else {
      this.filteredAppointment = this.appointment.filter(user =>
        user.doctor.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.nurse.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.patient.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.appointmentType.toLowerCase().includes(this.searchTerm.toLowerCase())

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


  createAppointment():void{
    this.appointmentService.createAppointment(this.doctorUsername,this.nurseUsername,
      this.patientUsername,this.hospitalName,
      this.appointmentNumber,this.appointmentType,
      this.appointmentDate,this.appointmentDescription).subscribe(
      {}
    );
    window.location.reload();
  }

  deleteAppointment(appointmentId:number):void{
    this.appointmentService.deleteAppointment(appointmentId).subscribe(
      () => {
        console.log(`Appointment with ID ${appointmentId} has been deleted successfully.`);
      },
      (error) =>{
        console.error('An error occurred:', error);
      }
    )
    window.location.reload();
  }





}
