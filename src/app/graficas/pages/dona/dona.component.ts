import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 50],
    [50, 50, 100, 50],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#F329FF',
        '#2977FF',
        '#33F249',
        '#355479',
        '#38F249'
      ]
    },
    {
      backgroundColor: [
        '#F329FF',
        '#2977FF',
        '#33F249',
        '#355479',
        '#38F249'
      ]
    }
  ]

}
