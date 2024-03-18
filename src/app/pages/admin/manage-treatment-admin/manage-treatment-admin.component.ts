import {Component, OnInit} from '@angular/core';
import {Medicines} from "../manage-medicines-admin/manage-medicines-admin.component";
import {Doctor} from "../manage-doctor/manage-doctor.component";
import {Patient} from "../manage-patient-admin/manage-patient-admin.component";
import {Treatment} from "../../doctor/the-create/create-treatment/create-treatment.component";
import {TreatmentService} from "../../../service/treatment/treatment.service";

@Component({
  selector: 'app-manage-treatment-admin',
  templateUrl: './manage-treatment-admin.component.html',
  styleUrls: ['./manage-treatment-admin.component.css']
})
export class ManageTreatmentAdminComponent implements OnInit{

  treatment:Treatment[]=[];

  medicine:Medicines[]=[];
  doctors:Doctor[]=[];
  patient:Patient[]=[];
  constructor(private treatmentService:TreatmentService) {
  }

  ngOnInit() {

    this.treatmentService.getTreatment().subscribe(
      (data) => {
        this.treatment = data;
      },
      (error) => {
        console.error('Error fetching appointment');
      }
    )
  }
}
