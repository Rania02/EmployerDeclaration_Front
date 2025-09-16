import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/shared/company.service';
import { MatDialogRef } from '@angular/material/dialog'
import { NotificationService } from 'src/app/shared/notification.service';
import { ActiviteService } from 'src/app/shared/activite.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private service:CompanyService, private notificationService: NotificationService,private activiteService:ActiviteService,    public dialogRef: MatDialogRef<CompanyComponent>) { }



  

  ngOnInit() {
    this.service.getCompanies();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertCompany(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();
    
    }
  }
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
