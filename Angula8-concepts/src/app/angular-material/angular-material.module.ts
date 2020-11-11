import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatToolbarModule,
  MatIconModule, MatBadgeModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';


const MaterialComponentsModule = [
  MatButtonModule,
  MatButtonToggleModule,
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule
]
@NgModule({

  imports: [
    MaterialComponentsModule
  ],
  exports: [MaterialComponentsModule]
})
export class AngularMaterialModule { }
