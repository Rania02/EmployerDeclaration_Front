import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';


import {MatTabsModule} from '@angular/material/tabs';
import { ColDef, GridOptions } from 'ag-grid-community';
export interface TableData {
  typeIdentifiant: string;
  identifiant: string;
  categorie: string;
  nom:string;
  activite:string;
  adresse:string;



}
@Component({
  selector: 'app-annex1',
  templateUrl: './annex1.component.html',
  styleUrls: ['./annex1.component.css']
})

export class Annex1Component  {
  @ViewChild('fileInput') fileInput: any;
  data: any[] = [];

  importFromExcel(): void {
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any): void {
    
    
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook: XLSX.WorkBook = XLSX.read(data, { type: 'array' });
      const worksheet: XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
      this.data = XLSX.utils.sheet_to_json(worksheet, { header: ['typeIdentifiant', 'identifiant', 'categorie','nom','activite','adresse',' interetsco','interetsca' ,'interetspe','retenues','net'] });
    };
    reader.readAsArrayBuffer(file);
  }

 

  displayedColumns: string[] = ['typeIdentifiant', 'identifiant', 'categorie','Nom et Prénom/Raison Sociale','Activité','Adresse','Intérets des comptes speciaux depargnes','Intéréts des autres capitaux mobiliers','Intérés des prets hors Tunisie','Retenus opérés','Net servi'];
 

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url: string = window.URL.createObjectURL(data);
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.xlsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  dataLoaded = false;

  tableColumns: string[] = [];
  annexes = ['Annexe 1', 'Annexe 2', 'Annexe 3', 'Annexe 4', 'Annexe 5', 'Annexe 6', 'Annexe 7'];
  selectedAnnexes: { [key: string]: boolean } = {};
  leftItems: string[] = ['Annexe1'    , 'Annexe2', 'Annexe3', 'Annexe4'];
  rightItems: string[] = ['Annexe5'   , 'Annexe6', 'Annexe7',];
  checkedItems: string[] = [];

  isChecked(item: string): boolean {
    return this.checkedItems.includes(item);
  }

  toggleItem(item: string): void {
    if (this.isChecked(item)) {
      this.checkedItems = this.checkedItems.filter((i) => i !== item);
    } else {
      this.checkedItems.push(item);
    }
  }
  

}

