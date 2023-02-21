import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data.service';
import { HmoService } from 'src/app/services/hmo.service';
import ChildModel from 'src/models/ChildModel';
import ClientModel from 'src/models/ClientModel';
import { HmoDTO } from 'src/models/HmoDTO';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  client: ClientModel;
  child: ChildModel;
  firstDate: Date = new Date(1920, 1, 1)
  lastDate: Date = new Date(Date.now())
  myFilter = (d: Date | null): boolean => {
    return d > this.firstDate && d < this.lastDate;
  };

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  idChildFormControl = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("[0-9]+")]);
  childNameFormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern("[A-Za-zא-ת]+")]);
  childBirthDateFormControl = new FormControl('', [Validators.required]);
  idFormControl = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("[0-9]+")]);
  firstNameFormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern("[A-Za-zא-ת]+")]);
  lastNameFormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern("[A-Za-zא-ת]+")]);
  birthDateFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  hmos: HmoDTO[];
  constructor(public formDataService: FormDataService, public hmoService: HmoService) { }
  ngOnDestroy(): void {
    this.store()
  }

  ngOnInit(): void {
    this.hmoService.getAllHmo().subscribe(x => {
      this.hmos = x
      console.log(this.hmos)
    })
    this.client = this.formDataService.getClient();
    this.child = this.formDataService.getChild();
  }
  addChild() {
    console.log("child");

    this.idChildFormControl = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern("[0-9]+")]);
    this.childNameFormControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.pattern("[A-Za-zא-ת]+")]);
    this.childBirthDateFormControl = new FormControl('', [Validators.required]);
    this.client.children.push(this.child);
    this.child = new ChildModel("", "", null);

  }
  save() {
    if (this.checkIfValidForm() == false)
      alert("פרטים לא תקינים")
    else {
      this.store()
      console.log("saving");
      this.formDataService.sendClientToServer()
    }
  }
  store() {
    this.formDataService.saveClient(this.client);
    this.formDataService.saveChild(this.child);
  }
  checkIfValidForm() {
    if (
      !(this.idFormControl.valid)
      ||
      !(this.lastNameFormControl.valid)
      ||
      !(this.firstNameFormControl.valid)
      ||
      !(this.birthDateFormControl.valid)
      ||
      this.client.hmoId === 0 ||
      this.client.Gender === 2
    )
      return false;
    return true;
  }
  checkIfValidChild() {
    if (!this.idChildFormControl.valid ||
      !(this.childBirthDateFormControl.valid) ||
      !(this.childNameFormControl.valid)
    )
      return false;
    return true;
  }
}
