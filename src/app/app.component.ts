import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
 import ClientModel from 'src/models/ClientModel';
// import { HmoModel } from 'src/models/HmoDTO';

/** @title Input with a custom ErrorStateMatcher */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-angular';
  clientModel;
  hmoModel;
  constructor(public http:HttpClient)
  {
  this.http.get<ClientModel[]>(`${environment.baseUrl}/Client`).subscribe(suc=>{this.clientModel=suc;
  console.log(suc)});
  // this.http.get<HmoModel[]>(`${environment.baseUrl}/Hmo`).subscribe(suc=>{this.hmoModel=suc;
  //   console.log(suc)});
    
  }
}
