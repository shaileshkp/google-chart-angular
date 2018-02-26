import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';
import { ChartService } from './chart-service.service';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor(public chartService: ChartService) { super(); }

  public BuildPieChart(elementId: String, data: any[], config: PieChartConfig) : void {  
    var chartFunc = () => {
      var chart = new google.visualization.PieChart(document.getElementById(<string>elementId)); 
      var selectHandler = (e) => {
        var position = chart.getSelection();
        var row = position[0].row;
        var col = position[0].column;
        var selectedData = data[row+1];
        // console.log('Element ID : ', elementId)
        // console.log('Chart selected'+JSON.stringify(position),data[row+1])        
        this.chartService.selectedChart(selectedData)
        
        // console.log(this.selectedData)
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