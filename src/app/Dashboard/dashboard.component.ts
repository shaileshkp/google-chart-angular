import { ComboChartConfig } from './../Models/ComboChartConfig';
import { Component, OnInit, OnChanges } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';
import { ChartService } from '../Services/chart-service.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private chartService: ChartService) {

  }

  ngOnInit(): void {

  }
  
}