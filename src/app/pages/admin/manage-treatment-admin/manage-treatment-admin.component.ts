import {Component, OnInit} from '@angular/core';
import {TreatmentService} from "../../../service/treatment/treatment.service";
import {Treatment} from "../../../modules/treatment";

@Component({
  selector: 'app-manage-treatment-admin',
  templateUrl: './manage-treatment-admin.component.html',
  styleUrls: ['./manage-treatment-admin.component.css']
})
export class ManageTreatmentAdminComponent implements OnInit{

  treatment:Treatment[]=[];
  filterTreatment:Treatment[]=[];
  searchTerm:string='';


  constructor(private treatmentService:TreatmentService) {
  }

  currentPage = 1;
  itemsPerPage = 10;

  get totalPages():number {
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

    this.treatmentService.getTreatment().subscribe(
      (data) => {
        this.treatment = data.reverse();
        this.filterTreatment = [...this.treatment];
        this.searchTreatment();
      },
      (error) => {
        console.error('Error fetching appointment');
      }
    )
  }

  searchTreatment():void{
    if (!this.searchTerm) {
      this.filterTreatment = [...this.treatment];
    } else {
      this.filterTreatment = this.treatment.filter(user =>
        user.treatmentName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.medicines.medicineName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.doctor.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.nurse.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.patient.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset current page when search is performed
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
  }
}
