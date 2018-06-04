import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from "@swimlane/ngx-charts";

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {

  constructor() { }

  chartData: boolean = false;
  countryData = []

 


  ngOnInit() {
    this.chartData = true;
    this.countryData = [
      { name: "Armbar", value: 2 },
      { name: "Triangle", value: 3 },
      { name: "Kimora", value : 20 }
    ];
  }

  //Chart
  view: any[] = [700, 400];
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLabels = true;
  explodeSlices = false;
  doughnut = false;


  title = "app";

  single: any[] = [
    {
      name: "Germany",
      value: 8940000
    },
    {
      name: "USA",
      value: 5000000
    },
    {
      name: "France",
      value: 7200000
    }
  ];

  // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  // showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "Population";

  // colorScheme = {
  //   domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  // };

  onSelect(event) {
    console.log(event);
  }

}
