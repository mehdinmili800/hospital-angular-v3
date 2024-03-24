import {Component, OnInit,} from '@angular/core';
import {HospitalService} from "../../../service/hospital/hospital.service";
import {Router} from "@angular/router";
import {Hospital} from "../../../modules/hospital";

@Component({
  selector: 'app-manage-hospital-admin',
  templateUrl: './manage-hospital-admin.component.html',
  styleUrls: ['./manage-hospital-admin.component.css']
})
export class ManageHospitalAdminComponent implements OnInit{

  hospital:Hospital[] = [];
  filteredHospital: Hospital[] = [];
  searchTerm:string = '';


  selectedHospital: Hospital | null = null;


  currentPage = 1;
  itemsPerPage = 10;

  public hospitalName:string | undefined;
  public hospital_place:string | undefined;
  public hospital_type:string | undefined;
  public hospital_description:string | undefined;
  public hospital_address:string | undefined;

  constructor(private hospitalService:HospitalService,
              private router:Router) {
  }

  get totalPages(): number {
    return Math.ceil(this.hospital.length / this.itemsPerPage);
  }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(
      (data) => {
        this.hospital = data.reverse();
        this.filteredHospital = [...this.hospital];
        this.searchHospital();
      },
      (error)=>{
        console.error('Error fetching hospital:', error);
      }
    )
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

  searchHospital():void{
    if (!this.searchTerm) {
      this.filteredHospital = [...this.hospital];
    } else {
      this.filteredHospital = this.hospital.filter(user =>
        user.hospitalName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset current page when search is performed
  }

  createHospital():void {
    this.hospitalService.createHospital(this.hospitalName,this.hospital_place,this.hospital_type,
      this.hospital_description,this.hospital_address).subscribe(
      {}
    );
    window.location.reload();
  }

  deleteHospital(hospitalId:number):void{
    this.hospitalService.deleteHospital(hospitalId).subscribe(
      () =>{
        this.router.navigate(['/admin-layout/manage-hospital-admin'])
        console.log(`Hospital with ID ${hospitalId} has been deleted successfully.`);
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    )
    window.location.reload();
  }


  // Function to select hospital when clicked
  selectHospital(hospital: Hospital): void {
    this.selectedHospital = hospital;
  }



}








