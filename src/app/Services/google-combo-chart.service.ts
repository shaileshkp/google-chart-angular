import { ComboChartConfig } from './../Models/ComboChartConfig';
import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';

declare var google: any;

@Injectable()
export class GoogleComboChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildComboChart(elementId: String, data: any[], config: ComboChartConfig) : void {
    var chartFunc = () => { 
      var chart = new google.visualization.ComboChart(document.getElementById(<string>elementId)); 
      function selectHandler(e) {
        var position = chart.getSelection();
        var row = position[0].row;
        var col = position[0].column;
        console.log('Chart selected'+JSON.stringify(position),data[row+1])
      }
      google.visualization.events.addListener(chart, 'select', selectHandler);
      return chart;
    };
    var options = {
      title : config.title,
      vAxis: {title: config.vAxis},
      hAxis: {title: config.hAxis},
      seriesType: 'bars'
      };

    this.buildChart(data, chartFunc, options);
  }
}