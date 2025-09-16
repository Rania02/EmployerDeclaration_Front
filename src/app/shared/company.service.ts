import { Injectable } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private firebase: AngularFireDatabase, private datePipe: DatePipe) { }
  companyList: AngularFireList<any>;
  
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    raisonSociale: new FormControl('', Validators.required),
    ville: new FormControl(''),
    rue: new FormControl(''),
    codepostal: new FormControl(''),
    gender: new FormControl('1'),
    activite: new FormControl(0),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false),
    matriculefiscale: new FormControl('', [Validators.required, this.exactLengthValidator(7)]),
    cle: new FormControl('', [Validators.required, Validators.maxLength(1)]),
    categorie: new FormControl('', [Validators.required,  Validators.maxLength(1)]),
    num: new FormControl('',  [Validators.required, this.exactLengthValidator(3)]),

  });
  exactLengthValidator(length: number) {
    return (control) => {
      const value = control.value;

      if (value && value.length !== length) {
        return {
          exactLength: {
            requiredLength: length,
            actualLength: value.length
          }
        };
      }

      return null;
    };
  }

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      raisonSociale: '',
      ville: '',
      rue: '',
      codepostal: '',
      gender: '1',
      activite: 0,
      hireDate: '',
      isPermanent: false,
      matriculefiscale: '',
      cle: '',
      categorie: '',
      num: '',
    });
  }
  getCompanies() {
    this.companyList = this.firebase.list('companies');
    return this.companyList.snapshotChanges();
  }
  insertCompany(company) {
    this.companyList.push({
      raisonSociale: company.raisonSociale,
      ville: company.ville,
      rue: company.rue,
      codepostal: company.codepostal,
      gender: company.gender,
      activite: company.activite,
      hireDate: company.hireDate == "" ? "" : this.datePipe.transform(company.hireDate, 'yyyy-MM-dd'),
      isPermanent: company.isPermanent
    });
  }
  updateCompany(company) {
    this.companyList.update(company.$key,
      {
        raisonSociale: company.raisonSociale,
        ville: company.ville,
        rue: company.rue,
        codepostal: company.codepostal,
        gender: company.gender,
        activite: company.activite,
        hireDate: company.hireDate == "" ? "" : this.datePipe.transform(company.hireDate, 'yyyy-MM-dd'),
        isPermanent: company.isPermanent
      });
  }
  deleteCompany($key: string) {
    this.companyList.remove($key);
  }
  

}
