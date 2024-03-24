export interface Appointment{

  id:number,
  appointmentNumber:string,
  appointmentType:string,
  appointmentDate:string,
  appointmentDescription:string,
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
  hospital:{
    id:number,
    hospitalName:string
  }
}
