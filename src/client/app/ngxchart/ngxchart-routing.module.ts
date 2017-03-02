import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxchartComponent } from './ngxchart.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ngxchart', component: NgxchartComponent }
    ])
  ],
  exports: [RouterModule]
})
export class NgxchartRoutingModule { }