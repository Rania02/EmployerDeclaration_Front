import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './companies/company/company.component';
import { MaterialModule } from './material/material.module';
import { CompanyService } from './shared/company.service';
import { MAT_DIALOG_DATA, MatCheckboxModule, MatDialogModule, MatDialogRef, MatTabsModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { ActiviteService } from './shared/activite.service';
import { Annex1Component } from './annex1/annex1.component';
import { Annex2Component } from './annex2/annex2.component';
import { Annex3Component } from './annex3/annex3.component';
import { Annex4Component } from './annex4/annex4.component';
import { Annex5Component } from './annex5/annex5.component';
import { Annex6Component } from './annex6/annex6.component';

import { Annex7Component } from './annex7/annex7.component';
import { AgGridModule } from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    CompaniesComponent,
    CompanyComponent,
    CompanyListComponent,
    Annex1Component,
    Annex2Component,
    Annex3Component,
    Annex4Component,
    Annex5Component,
    Annex6Component,
    Annex7Component
  ],
  imports: [
    MatCheckboxModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    AgGridModule.withComponents([]),
    MaterialModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatDialogModule
  ],
  providers: [UserService,, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },DatePipe,
CompanyService,
ActiviteService,
{ provide: MatDialogRef, useValue: {} },
{ provide: MAT_DIALOG_DATA, useValue: [] },],
  bootstrap: [AppComponent],
  entryComponents:[CompanyComponent]
})
export class AppModule { }
