import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user/user.service";
import {AppointmentService} from "../../../service/appointment/appointment.service";
import {DoctorService} from "../../../service/user/doctor/doctor.service";
import {Appointment} from "../../../modules/appointment";


@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit{
  appointments: Appointment[] =[];
  filteredAppointment: Appointment[]=[];
  searchTerm:string = '';


  constructor(
    private userService: UserService,
    private appointmentService: AppointmentService
  ) { }

  currentPage = 1;
  itemsPerPage = 10;

  get totalPages():number {
    return Math.ceil(this.appointments.length / this.itemsPerPage);
  }

  ngOnInit(): void {
    // Step 1: Get user data
    this.userService.getUserInfo().subscribe(user => {

        // Step 3: Get appointments using doctor id
        this.appointmentService.getAppointments(user.id).subscribe(appointments => {
          this.appointments = appointments.reverse();
          this.filteredAppointment = [...this.appointments];
          this.searchAppointment();
      });
    });
  }


  searchAppointment():void{
    if (!this.searchTerm) {
      this.filteredAppointment = [...this.appointments];
    } else {
      this.filteredAppointment = this.appointments.filter(user =>
        user.hospital.hospitalName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.appointmentType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.doctor.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.nurse.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.patient.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset current page when search is performed
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

}


