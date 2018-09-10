import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//https://www.youtube.com/watch?v=RTzi5DS7On4
//https://medium.com/@asfo/haciendo-gr%C3%A1ficas-en-tiempo-real-con-angular-y-chartjs-y-una-pizca-de-nodejs-f0db208082fc

import { AccordionModule } from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';


@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    AccordionModule,
  ],
  declarations: [],
  exports:[
    ChartModule,
    AccordionModule,
  ]
})
export class PrimengModule { }
