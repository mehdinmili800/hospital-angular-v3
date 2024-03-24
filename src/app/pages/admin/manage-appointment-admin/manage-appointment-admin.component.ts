import {Component, OnInit} from '@angular/core';
import {AppointmentService} from "../../../service/appointment/appointment.service";
import {Appointment} from "../../../modules/appointment";
import {User} from "../../../modules/user";


@Component({
  selector: 'app-manage-appointment-admin',
  templateUrl: './manage-appointment-admin.component.html',
  styleUrls: ['./manage-appointment-admin.component.css']
})
export class ManageAppointmentAdminComponent implements OnInit{

  appointment:Appointment[] =[];
  filteredAppointment: Appointment[]=[];
  searchTerm:string = '';

  constructor(private appointmentService:AppointmentService) {
  }

  currentPage = 1;
  itemsPerPage = 10;

  get totalPages():number {
    return Math.ceil(this.appointment.length / this.itemsPerPage);
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
  }

  searchAppointment():void{
    if (!this.searchTerm) {
      this.filteredAppointment = [...this.appointment];
    } else {
      this.filteredAppointment = this.appointment.filter(appointment =>
        appointment.hospital.hospitalName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        appointment.appointmentType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        appointment.doctor.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        appointment.nurse.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        appointment.patient.username.toLowerCase().includes(this.searchTerm.toLowerCase())
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
