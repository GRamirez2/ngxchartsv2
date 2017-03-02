import { Component, OnInit } from '@angular/core';
// import { DataService } from '../shared/data/data.service';

// import {NgxChartsModule} from '@swimlane/ngx-charts';

import { single } from '../data';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ngxchart-component',
  templateUrl: 'ngxchart.component.html',
  styleUrls: ['ngxchart.component.css'],
})
export class NgxchartComponent{

    single: any[];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Adherent';
    showYAxisLabel = true;
    yAxisLabel = 'Group';

    colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
    
    constructor() {
    Object.assign(this, {single})   
    }
    
//     onSelect(event) {
//     console.log(event);
//   }

}
// origin code below

//   errorMessage: string;
//   data: any[] = [];

//   /**
//    * Creates an instance of the HomeComponent with the injected
//    * NameListService.
//    *
//    * @param {NameListService} nameListService - The injected NameListService.
//    */
//   constructor(public dataService: DataService) {}

//   /**
//    * Get the data OnInit
//    */
//   ngOnInit() {
//       this.getData();//I don't like how this does not return a value
//       this.renderGraph();
//   }

//     renderGraph() {
//         var chartForm: any = {
//             chart: {
//                 type: 'bar'
//             },
//             title: {
//                 text: 'Stacked bar chart'
//             },
//             xAxis: {
//                 categories: ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'All']
//             },
//             yAxis: {
//                 min: 0,
//                 title: {
//                     text: 'Adherence'
//                 }
//             },
//             legend: {
//                 reversed: true
//             },
//             plotOptions: {
//                 series: {
//                     stacking: 'normal'
//                 }
//             },
//             series: []
//         }
        
//         for (var i = 0, len = this.data.length; i < len; i++) {
//             var that: any = this.data[i];
//             var thatData: any = [];
//             for(var k = 0, leng = that.values.length; k < leng; k++) {
//                 thatData.push(that.values[k].value)
//             }
//             var seriesData = {name: this.key, data: thatData}
//             chartForm.series.push(seriesData);
//         }
//         Highcharts.chart('container', chartForm);
        
//     }

//   /**
//    * Handle the nameListService observable
//    */
//   getData() {
//     this.dataService.get()
//       .subscribe(
//         data => this.data = data,
//         error => this.errorMessage = <any>error
//       );
//   }

//     data = [
//     {
//       "key": "Adherent",
//       "color": "#00ff00",
//       "values": [
//         {
//           "label" : "Group A" ,
//           "value" : 6.666
//         } ,
//         {
//           "label" : "Group B" ,
//           "value" : 12.371
//         } ,
//         {
//           "label" : "Group C" ,
//           "value" : 60.000
//         } ,
//         {
//           "label" : "Group D" ,
//           "value" : 10.526
//         },
//         {
//           "label" : "Group E" ,
//           "value" : 43.75
//         },
//         {
//           "label" : "Group F" ,
//           "value" : 18.442
//         },
//         {
//           "label" : "All" ,
//           "value" : 17.684
//         }
//       ]
//     },
//     {
//       "key": "Testing",
//       "color": "#1f77b4",
//       "values": [
//         {
//           "label" : "Group A" ,
//           "value" : 53.333
//         } ,
//         {
//           "label" : "Group B" ,
//           "value" : 47.422
//         } ,
//         {
//           "label" : "Group C" ,
//           "value" : 15.000
//         } ,
//         {
//           "label" : "Group D" ,
//           "value" : 71.052
//         },
//         {
//           "label" : "Group E" ,
//           "value" : 25.000
//         },
//         {
//           "label" : "Group F" ,
//           "value" : 54.098
//         },
//         {
//           "label" : "All" ,
//           "value" : 51.368
//         }
//       ]
//     },
//     {
//       "key": "Non_Adherent",
//       "color": "#ff7777",
//       "values": [
//         {
//           "label" : "Group A" ,
//           "value" : 33.333
//         } ,
//         {
//           "label" : "Group B" ,
//           "value" : 25.773
//         } ,
//         {
//           "label" : "Group C" ,
//           "value" : 20.000
//         } ,
//         {
//           "label" : "Group D" ,
//           "value" : 18.421
//         },
//         {
//           "label" : "Group E" ,
//           "value" : 18.75
//         },
//         {
//           "label" : "Group F" ,
//           "value" : 17.622
//         },
//         {
//           "label" : "All" ,
//           "value" : 21.473
//         }
//       ]
//     },
//     {
//       "key": "Over_30_days",
//       "color": "#ff0000",
//       "values": [
//         {
//           "label" : "Group A" ,
//           "value" : 6.66
//         } ,
//         {
//           "label" : "Group B" ,
//           "value" : 14.432
//         } ,
//         {
//           "label" : "Group C" ,
//           "value" : 5.000
//         } ,
//         {
//           "label" : "Group D" ,
//           "value" : 0
//         },
//         {
//           "label" : "Group E" ,
//           "value" : 12.5
//         },
//         {
//           "label" : "Group F" ,
//           "value" : 9.836
//         },
//         {
//           "label" : "All" ,
//           "value" : 9.473
//         }
//       ]
//     }
//     ];
// }
