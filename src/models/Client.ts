import ChildDTO from "./ChildDTO";
enum EGenderDTO {
    Male = 0,
    Female = 1,
  }
export default class Client{
    constructor(public id:number,public idNumber:string,public firstName:string,public lastName:string,public birthDate:Date,public toAdvertise:boolean,public eGender:EGenderDTO,public hmoId:number,public myImpression:string,public children:ChildDTO[]){}
}