import { Injectable } from '@angular/core';
import ClientModel from 'src/models/ClientModel';
import{HttpClient}from '@angular/common/http';
import ChildModel from 'src/models/ChildModel';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(public http:HttpClient) { }
 client: ClientModel=new ClientModel("","","",null,false,2,0,"",[]);
  child: ChildModel=new ChildModel("","",null);
 // children:ChildModel[]=[]; 
  routeUrl=`${environment.baseUrl}/Client`;
  saveClient(c: ClientModel) {
    this.client = c;
  }
  saveChild(c: ChildModel) {
    this.child = c;
  }
  
  getClient() {
    return this.client;
  }
  getChild()
  {
    return this.child;
  }
 
  sendClientToServer() {
    console.log(this.client)
   return this.http.post<ClientModel>(`${environment.baseUrl}/Client`,this.client).subscribe(s=>{console.log(s)
   });
  }

  reset()
  {
    this.client=new ClientModel("","","",null,false,2,0,"",[]);
    this.child=new ChildModel("","",new Date());
  }
}
