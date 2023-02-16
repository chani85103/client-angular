import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HmoModel } from 'src/models/HmoModel';

@Injectable({
  providedIn: 'root'
})
export class HmoService {

  baseUrl=`${environment.baseUrl}\HMO`
  constructor(private http:HttpClient) { }
  HMOs:HmoModel[]=[];
  getAllHmo()
  {
   return this.http.get<HmoModel[]>(`${environment.baseUrl}/Hmo`);
  }
  getHmoById()
  {
    
  }
}
