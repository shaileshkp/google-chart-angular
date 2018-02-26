import { ComboChartConfig } from './../Models/ComboChartConfig';
import { Component, OnInit, OnChanges } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';
import { Subject } from '../Models/Subject';
import { ChartService } from '../Services/chart-service.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  data: any[];
  config: PieChartConfig;
  elementId: String;

  constructor(private chartService: ChartService) {

  }

  ngOnInit(): void {
    //Piechart1 Data & Config
    this.config = new PieChartConfig('Toppers Marks', 0.2);
    this.elementId = 'myPieChart';
    this.data = this.chartService.getData();
    
  }

  ngOnChanges() {
    this.config = new PieChartConfig('Toppers Marks', 0.2);
    this.elementId = 'myPieChart';
    this.data = this.chartService.getData();
  }

  
}