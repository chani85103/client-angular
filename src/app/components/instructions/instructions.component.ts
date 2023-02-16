import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data.service';
import ClientModel from 'src/models/ClientModel';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
client:ClientModel;
  constructor(public formDataService:FormDataService) { 
    this.client=formDataService.client;
  }

  ngOnInit(): void {
  }

}
