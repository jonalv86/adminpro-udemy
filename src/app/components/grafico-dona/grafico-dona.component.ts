import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input() grafico: any;

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public leyenda: string = '';

  constructor() { }

  ngOnInit(): void {
    this.doughnutChartLabels = this.grafico.labels;
    this.doughnutChartData = this.grafico.data;
    this.doughnutChartType = this.grafico.type;
    this.leyenda = this.grafico.leyenda;
  }

}
