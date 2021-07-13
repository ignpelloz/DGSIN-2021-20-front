import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.css'] // styles for this comp
})
export class AppComponent {
  title = 'dgsin-expenditures-front';

  // here code of my comp

  setTitle(title: string): void {

  }

  // Source: https://www.npmjs.com/package/highcharts-angular
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  }; // required
  //chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

}
