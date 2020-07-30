import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponentComponent } from './one-component/one-component.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';

import { ParentComponentComponent } from './ComponentInteraction/parent-component/parent-component.component';
import { ChildComponentComponent } from './ComponentInteraction/child-component/child-component.component';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { EmployeeListComponent } from './ServiceInteraction/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './ServiceInteraction/employee-details/employee-details.component';
import { EmployeeServiceService } from './ServiceInteraction/employee-service.service';
import { GridFunctionalityComponent } from './AgGrid/grid-functionality/grid-functionality.component'
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { httpInterceptorProviders } from './http-interceptors';
import { HttpCallsComponent } from './HttpCalls/http-calls/http-calls.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { DepartmentsListComponent } from './Routings/departments-list/departments-list.component';
import { DepartmentsDetailsComponent } from './Routings/departments-details/departments-details.component';
// import { DepartmentsOverviewComponent } from './Routings/departments-overview/departments-overview.component';
// import { DepartmentsContactComponent } from './Routings/departments-contact/departments-contact.component'



@NgModule({
  declarations: [
    AppComponent,

    ChildComponentComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    routingComponents,
    NoPageFoundComponent,
    DepartmentsDetailsComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [EmployeeServiceService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
