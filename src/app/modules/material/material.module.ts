import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import {  MatInputModule, MatButtonModule, 
  MatToolbarModule, MatSidenavModule,
  MatIconModule, MatListModule,
  MatDialogModule } from '@angular/material';
  import { MatGridListModule, MatCardModule,
  MatMenuModule, MatTableModule,
  MatPaginatorModule, MatSortModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule, 
    MatCardModule,
    MatMenuModule, 
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule
  ],
  declarations: [
  ],
  exports: [
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatGridListModule, 
    MatCardModule,
    MatMenuModule, 
    MatTableModule,
    MatPaginatorModule, 
    MatSortModule
  ]
})
export class MaterialModule { }
