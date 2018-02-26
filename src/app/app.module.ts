import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComboChartComponent } from './Dashboard/Charts/combochart.component';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { FormsModule }   from '@angular/forms';
import { GoogleComboChartService } from './Services/google-combo-chart.service';
import { GooglePieChartService } from './Services/google-pie-chart.service';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './Dashboard/Charts/piechart.component'
import { ChartService } from './Services/chart-service.service'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComboChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GoogleComboChartService,GooglePieChartService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
