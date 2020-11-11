import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridFunctionalityComponent } from './AgGrid/grid-functionality/grid-functionality.component';
import { OneComponentComponent } from './one-component/one-component.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ParentComponentComponent } from './ComponentInteraction/parent-component/parent-component.component';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { EmployeeListComponent } from './ServiceInteraction/employee-list/employee-list.component';
import { HttpCallsComponent } from './HttpCalls/http-calls/http-calls.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { DepartmentsListComponent } from './Routings/departments-list/departments-list.component';
import { DepartmentsDetailsComponent } from './Routings/departments-details/departments-details.component';
import { DepartmentsOverviewComponent } from './Routings/departments-overview/departments-overview.component';
import { DepartmentsContactComponent } from './Routings/departments-contact/departments-contact.component';
import { TemplateInteractionsComponent } from './template-interactions/template-interactions.component';
import { ParentInteractionComponent } from './InterComponentInteraction/parent-interaction/parent-interaction.component';
import { ChildInteractionComponent } from './InterComponentInteraction/child-interaction/child-interaction.component';
import { BasicViewComponent } from './AngularMaterials/basic-view/basic-view.component';


const routes: Routes = [
  { path: '', redirectTo: '/basicBindings', pathMatch: 'full' },//NoPageFoundComponent

  { path: 'AGGrid', component: GridFunctionalityComponent },
  { path: 'basicBindings', component: OneComponentComponent },
  { path: 'structuralDirectives', component: StructuralDirectivesComponent },
  { path: 'componentInteraction', component: ParentComponentComponent },
  { path: 'pipes', component: PipesComponentComponent },
  { path: 'angularServices', component: EmployeeListComponent },
  { path: 'httpobservables', component: HttpCallsComponent },
  { path: 'routingParams', component: DepartmentsListComponent },
  {
    path: 'routingParams/:id',
    component: DepartmentsDetailsComponent,
    children: [
      { path: 'overview', component: DepartmentsOverviewComponent },
      { path: 'contact', component: DepartmentsContactComponent }
    ]
  },
  { path: 'templateInteractions', component: TemplateInteractionsComponent },
  { path: 'parentInteraction', component: ParentInteractionComponent },
  { path: 'AgularMaterialBasic', component: BasicViewComponent },
  { path: '**', component: NoPageFoundComponent },//
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  OneComponentComponent,
  StructuralDirectivesComponent,
  ParentComponentComponent,
  PipesComponentComponent,
  EmployeeListComponent,
  GridFunctionalityComponent,
  HttpCallsComponent,
  DepartmentsListComponent,
  DepartmentsDetailsComponent,
  DepartmentsOverviewComponent,
  DepartmentsContactComponent,
  TemplateInteractionsComponent,
  ParentInteractionComponent,
  ChildInteractionComponent,
  BasicViewComponent
]