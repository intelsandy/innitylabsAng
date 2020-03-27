import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
      labels: { fontSize: 16, fontFamily:"'Ambit', Arial, Helvetica, sans-serif", fontColor: '#000' }
    }
  };
  public pieChartLabels: Label[] = [['Information'], ['Decisions'], 'Actions'];
  public pieChartData: SingleDataSet = [45, 35, 40];
  public pieChartType: ChartType = 'pie';
  //public pieChartColors: Color = ['#ffd700', '#00c0ef', '#91cd18'];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['#ffd700', '#00c0ef', '#91cd18'],
      color: ['#ffd700', '#00c0ef', '#91cd18']
    },
  ];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

}
