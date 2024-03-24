import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MedicinesService} from "../../../service/medicines/medicines.service";
import {Medicines} from "../../../modules/medicines";
import {Hospital} from "../../../modules/hospital";

@Component({
  selector: 'app-manage-medicines-admin',
  templateUrl: './manage-medicines-admin.component.html',
  styleUrls: ['./manage-medicines-admin.component.css']
})
export class ManageMedicinesAdminComponent {

  medicines:Medicines[] = [];
  filteredMedicines:Medicines[]=[];
  searchTerm:string = '';

  selectedMedicines: Medicines | null = null;

  currentPage = 1;
  itemsPerPage = 10;

  public medicineName:string | undefined;
  public medicine_company:string | undefined;
  public medicine_composition:string | undefined;
  public medicine_cost:string | undefined;
  public medicine_type:string | undefined;
  public medicine_dose:string | undefined;
  public medicine_description:string | undefined;

  constructor(private medicineService:MedicinesService,
              private router:Router) {
  }

  get totalPages(): number {
    return Math.ceil(this.medicines.length / this.itemsPerPage);
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
        this.medicines = data.reverse();
        this.filteredMedicines = [...this.medicines];
        this.searchMedicines();
      },
      (error)=>{
        console.error('Error fetching hospital:', error);
      }
    )
  }

  searchMedicines():void{
    if (!this.searchTerm) {
      this.filteredMedicines = [...this.medicines];
    } else {
      this.filteredMedicines = this.medicines.filter(user =>
        user.medicineName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1;
  }

  createMedicines():void {
    this.medicineService.createMedicine(this.medicineName,this.medicine_company,this.medicine_composition,
      this.medicine_cost,this.medicine_type,this.medicine_dose,this.medicine_description).subscribe(
      {}
    );
    window.location.reload();
  }

  deleteMedicines(medicinesId:number):void{
    this.medicineService.deleteMedicines(medicinesId).subscribe(
      () => {
        console.log(`Medicines with ID ${medicinesId} has been deleted successfully.`);
      },
      (error) =>{
        console.error('An error occurred:', error);
      }
    );
    window.location.reload();
  }

  // Function to select hospital when clicked
  selectMedicines(medicines: Medicines): void {
    this.selectedMedicines = medicines;
  }
}

