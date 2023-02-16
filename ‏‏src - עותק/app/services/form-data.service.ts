import { Injectable } from '@angular/core';
import Child from 'src/models/Child';
import Client from 'src/models/Client';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }
  client: Client=new Client("","","",null,"","");
  child: Child=new Child("","",null);
  children:Child[]=[];
  saveClient(c: Client) {
    this.client = c;
  }
  saveChild(c: Child) {
    this.child = c;
  }
  saveChildren(c:Child[])
  {
    this.children=c;
  }
  getClient() {
    return this.client;
  }
  getChild()
  {
    return this.child;
  }
  getChildren()
  {
return this.children;
  }
  sendToServer() {

  }
}
