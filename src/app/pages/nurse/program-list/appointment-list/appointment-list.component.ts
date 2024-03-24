import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../../../modules/appointment";
import {UserService} from "../../../../service/user/user/user.service";
import {AppointmentService} from "../../../../service/appointment/appointment.service";

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  appointments: Appointment[] =[];

  filteredAppointment: Appointment[]=[];
  searchTerm:string = '';

  currentPage = 1;
  itemsPerPage = 10;
  constructor(
    private userService: UserService,
    private appointmentService: AppointmentService
  ) { }


  get totalPages(): number {
    return Math.ceil(this.appointments.length / this.itemsPerPage);
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
        user.doctor.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.nurse.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.patient.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.appointmentType.toLowerCase().includes(this.searchTerm.toLowerCase())

      );
    }
    this.currentPage = 1; // Reset current page when search is performed
  }
}
