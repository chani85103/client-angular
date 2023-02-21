import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HmoDTO } from 'src/models/HmoDTO';

@Injectable({
  providedIn: 'root'
})
export class HmoService {

  baseUrl=`${environment.baseUrl}\HMO`
  constructor(private http:HttpClient) { }
  HMOs:HmoDTO[]=[];
  getAllHmo()
  {
   return this.http.get<HmoDTO[]>(`${environment.baseUrl}/Hmo`);
  }
  getHmoById()
  {
    
  }
}
