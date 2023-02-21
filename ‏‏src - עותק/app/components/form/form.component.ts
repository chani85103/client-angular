import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data.service';
import Child from 'src/models/ChildDTO';
import Client from 'src/models/Client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  client: Client;
  child: Child;
  children:Child[];
  constructor(public formDataService: FormDataService) { }
  ngOnDestroy(): void {
    this.formDataService.saveClient(this.client);
    this.formDataService.saveChild(this.child);
    this.formDataService.saveChildren(this.children);
  }

  ngOnInit(): void {
    this.client = this.formDataService.getClient();
    this.child=this.formDataService.getChild();
    this.children=this.formDataService.getChildren();
  }
  addChild() {
    this.children.push(this.child);
    this.child = new Child("", "", null);
  }
}
