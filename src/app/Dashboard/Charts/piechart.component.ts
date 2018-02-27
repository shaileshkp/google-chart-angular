import { Component, Input, OnInit } from '@angular/core';

import { GooglePieChartService } from './../../Services/google-pie-chart.service';
import { PieChartConfig } from './../../Models/PieChartConfig';
import { ChartService } from '../../Services/chart-service.service';

declare var google: any;


@Component({
  selector: 'pie-chart',
  templateUrl: './piechart.component.html'
})
export class PieChartComponent implements OnInit {
    data: any[];
    config: PieChartConfig;
    elementId: String;

    constructor(private _pieChartService: GooglePieChartService, private chartService: ChartService) {}

    ngOnInit(): void {
        this.config = new PieChartConfig('Marks', 0.4);
        this.elementId = 'myPieChart';
        this.data = this.chartService.getData();
        console.log(this.data)
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
    }

    selectChart() {
        setTimeout(() => {
            this.data = this.chartService.getData();
            console.log(this.data)
            this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
        }, 100);
    }
}