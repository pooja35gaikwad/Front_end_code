import { Component, OnInit } from '@angular/core';
import { CSVDataBean, DataService } from '../service/data.service';
import * as CanvasJS from './canvasjs.min.js'

export class FreqParams {
  constructor(
    public startFreq: number,
    public stopFreq: number,
    public noOfPoints: number,

  ) {

  }
}

@Component({
  selector: 'app-delay-calibration',
  templateUrl: './delay-calibration.component.html',
  styleUrls: ['./delay-calibration.component.css']
})

export class DelayCalibrationComponent implements OnInit {

  img1!: string[];
  freq!: BigInteger[];
  real!: Float32List[];
  magnitude!: number[];
  startFreq!: number;
  stopFreq!: number;
  numberOfpoints!: number;

  constructor(private service: DataService) { }
  chart: any;

  saveParameters(val) {
   this.service.setParameters(val).subscribe(
     
   )
    this.startFreq = val.startFreq;
    this.stopFreq = val.stopFreq;
    this.numberOfpoints = val.numberOfpoints;
    console.log(val);
  }
  ngOnInit(): void {
  }
  display = false;

  onPress() {
    // this.display = !this.display;
    console.log(this.service.executeMethod());

    this.service.executeMethod().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
    //console.log("Welcome here");
    console.log("this is last line of code");
  }

  handleSuccessfulResponse(response: CSVDataBean) {
    console.log(response.freq);
    console.log(response.real);
    console.log(response.img);
    console.log(response.magnitude);
    // this.img1=response.img;
    // this.freq=response.freq;
    // this.real=response.real;
    var Freqarray: Array<any> = response.freq;
    //var Magarray: Array<any> = response.magnitude;
    // var Magarray : any[] = response.magnitude;
    var Realarray: Array<any> = response.real;
    var Imgarray: Array<any> = response.img;



    const dps = [] as any;


    for (var i = 0; i <= 201; i++) {
      dps.push({
        // x: Freqarray[i],
        // y: Realarray[i]
        // x: [i*4],
        // y: Realarray[i]

        x: [i],
        // y: response.magnitude[i]
        y: response.fftMagnitude[i]
      })
    }

    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      axisX: {
        title: "Frequency",
        //  suffix: "Hz",
        // maximum: 804,
        maximum: 201,
        minimum: 0
        //maximum: 1000000000,
        //  minimum:500000000
      },
      axisY: {
        title: "Real Part of Data",
        // suffix: "m",
        // maximum: 5,
        // minimum: -2

      },
      data: [
        {
          type: "spline",
          dataPoints: dps
        }
      ]

    });

    this.chart.render();
  }

}
