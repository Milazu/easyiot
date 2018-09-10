import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';//Dependencia de PrimeNG

@Component({
  selector: 'app-datadisplay',
  templateUrl: './datadisplay.component.html',
  styleUrls: ['./datadisplay.component.css']
})
export class DatadisplayComponent implements OnInit {

  data: any;

  change: boolean = false;

  private _layout = {
    title: 'Scroll and Zoom',
    showlegend: false,
    yaxis: {
      fixedrange: true
     },
    xaxis : {
       fixedrange: true
       }
  };

  private _config ={
    displayModeBar: false,
    showAxisDragHandles: false,
    showAxisRangeEntryBoxes: false,
  }

  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' }
    ],
    layout: this._layout,
    config: this._config
};

  constructor() { }

  ngOnInit() {
    
  }

  Change(){
    console.log("Change");
    this.graph.data = [
    { x: [1, 2, 3,4], y: [2, 5, 3,6], type: 'bar' }
    ]
  }

  

}
