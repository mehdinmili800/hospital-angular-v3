export interface Treatment{

  id:number,
  treatmentName:string,
  treatmentNumber:string,
  treatmentType:string,
  treatmentDate:string,
  treatmentDescription:string,
  doctor:{
    id:number,
    username:string,
  },
  nurse:{
    id:number,
    username:string,
  },
  patient:{
    id:number,
    username:string
  },
  medicines:{
    id:number,
    medicineName:string
  }


}
