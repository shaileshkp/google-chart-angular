import { ComboChartConfig } from './../Models/ComboChartConfig';
import { Component } from '@angular/core';
import { PieChartConfig } from './../Models/PieChartConfig';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;
  
  ngOnInit(): void {     

    //Piechart1 Data & Config
    this.config1 = new PieChartConfig('Toppers Marks', 0.2);
    this.elementId1 = 'myPieChart1';
    this.data1 = [
      ['Class', 'Percentage'],
      ['10th', 90],
      ['12th', 90],
      ['BCA',  86],
      ['MCA', 95]
    ];
    
    //Piechart2 Data & Config

    this.config2 = new PieChartConfig('My Marks', 0.3);
    this.elementId2 = 'myPieChart2';
    this.data2 = [
      ['Class', 'Percentage'],
      ['10th', 60],
      ['12th', 50],
      ['BCA',  65],
      ['MCA', 75]
    ];
  }
  
}