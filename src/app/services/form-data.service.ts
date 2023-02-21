import { Injectable } from '@angular/core';
import ClientModel from 'src/models/ClientModel';
import { HttpClient } from '@angular/common/http';
import ChildModel from 'src/models/ChildModel';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver'
import Client from 'src/models/Client';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(public http: HttpClient) { }
  client: ClientModel = new ClientModel("", "", "", null, false, 2, 0, "", []);
  child: ChildModel = new ChildModel("", "", null);
  // children:ChildModel[]=[]; 
  routeUrl = `${environment.baseUrl}/Client`;
  saveClient(c: ClientModel) {
    this.client = c;
  }
  saveChild(c: ChildModel) {
    this.child = c;
  }

  getClient() {
    return this.client;
  }
  getChild() {
    return this.child;
  }

  sendClientToServer() {
    console.log(this.client)
    return this.http.post<Client>(`${environment.baseUrl}/Client`, this.client).subscribe(s => {
      console.log(s)
      let es: Client[] = [];
      es.push(s)
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(es);
      // this.exportAsExcelFile(s,"were");
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, "f" + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }
  // public exportAsExcelFile(json: any, excelFileName: string): void {
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
  //   this.saveAsExcelFile(excelBuffer, excelFileName);
  // }

  // private saveAsExcelFile(buffer: any, fileName: string): void {
  //   const data: Blob = new Blob([buffer], {
  //     type: EXCEL_TYPE
  //   });
  //   FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  // }
  reset() {
    this.client = new ClientModel("", "", "", null, false, 2, 0, "", []);
    this.child = new ChildModel("", "", new Date());
  }
}
