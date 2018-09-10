import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './modules/material/material.module';
import { PrimengModule } from './modules/primeng/primeng.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule , RoutingComponents } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './components/table/table.component';
import { RegisterComponent } from './components/register/register.component';
import { MatDialogRef } from '../../node_modules/@angular/material';
import { DatadisplayComponent } from './components/datadisplay/datadisplay.component';

import { PlotlyModule } from 'angular-plotly.js'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutingComponents,
    HomeComponent,
    DashboardComponent,
    TableComponent,
    RegisterComponent,
    DatadisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengModule,
    LayoutModule,
    PlotlyModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
