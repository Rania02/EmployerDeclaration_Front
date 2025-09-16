import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'src/app/shared/company.service';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { ActiviteService } from 'src/app/shared/activite.service';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CompanyComponent } from '../company/company.component';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private service :CompanyService ,private actservice :ActiviteService,private dialog: MatDialog ) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['raisonsociale', 'ville', 'rue', 'codepostal','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  
  ngOnInit() {
    this.service.getCompanies().subscribe(
        list => {
          let array = list.map(item => {
          
            return {
              $key: item.key,
      
              
              ...item.payload.val()
            };
      });
      this.listData= new MatTableDataSource(array);
      this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(ele => {
            return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
          });
        };
  
      });
  }
onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}

applyFilter() {
  this.listData.filter = this.searchKey.trim().toLowerCase();
}
onCreate() {
  this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(CompanyComponent,dialogConfig);
}
}
