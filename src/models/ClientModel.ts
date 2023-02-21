
import ChildModel from "./ChildModel";

export default class ClientModel{
  //  public string Id { get; set; } = string.Empty;
  //       public string FirstName { get; set; } = string.Empty;
  //       public string LastName { get; set; } = string.Empty;
  //       public DateTime BirthDate { get; set; }
  //       public bool ToAdvertise { get; set; }
  //       public EGenderDTO EGender { get; set; }
  //       public int HmoId { get; set; }
  //       public string MyHmo { get; set; } = default;
  // "id": "strdsfswsqsfsding",
  // "firstName": "string",
  // "lastName": "string",
  // "birthDate": "2023-02-13T16:49:52.686Z",
  // "toAdvertise": true,
  // "eGender": 0,
  // "hmoId":1,
  // "myImpression": "string"
    constructor(public idNumber:string,public firstName:string,public lastName:string,public birthDate:Date,public toAdvertise:boolean,public Gender:number,public hmoId:number,public myImpression:string,public children:ChildModel[]){}
}