import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxchartComponent } from './ngxchart.component';
import { NgxchartRoutingModule } from './ngxchart-routing.module';
import { SharedModule } from '../shared/shared.module';
// import { DataService } from '../shared/data/data.service';

@NgModule({
  imports: [CommonModule, NgxchartRoutingModule, SharedModule],
  declarations: [NgxchartComponent],
  exports: [NgxchartComponent]
})
export class NgxchartModule { }