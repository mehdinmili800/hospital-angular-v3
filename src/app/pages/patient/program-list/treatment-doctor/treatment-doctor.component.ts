import {Component, OnInit} from '@angular/core';
import {Treatment} from "../../../../modules/treatment";
import {UserService} from "../../../../service/user/user/user.service";
import {TreatmentService} from "../../../../service/treatment/treatment.service";

@Component({
  selector: 'app-treatment-doctor',
  templateUrl: './treatment-doctor.component.html',
  styleUrls: ['./treatment-doctor.component.css']
})
export class TreatmentDoctorComponent implements OnInit{

  treatment:Treatment[]=[];
  filteredTreatment: Treatment[]=[];
  searchTerm:string = '';

  constructor(private userService:UserService,
              private treatmentService:TreatmentService) {
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


  ngOnInit():void {
    this.userService.getUserInfo().subscribe(user => {
      this.treatmentService.getTreatmentUserId(user.id).subscribe(treatment => {
        this.treatment = treatment.reverse();
        this.filteredTreatment = [...this.treatment];
        this.searchTreatment();
      })
    })
  }

  searchTreatment():void{
    if (!this.searchTerm) {
      this.filteredTreatment = [...this.treatment];
    } else {
      this.filteredTreatment = this.treatment.filter(user =>
        user.medicines.medicineName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.treatmentType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.doctor.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.nurse.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.patient.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset current page when search is performed
  }

}
