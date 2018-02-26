import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: String, data: any[], config: PieChartConfig) : void {  
    var chartFunc = () => { 
      var chart = new google.visualization.PieChart(document.getElementById(<string>elementId)); 
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
            title: config.title,
            pieHole: config.pieHole,
      };

    this.buildChart(data, chartFunc, options);
  }
}