import { Component, OnInit } from '@angular/core';
import { HeatMap, Legend, Tooltip, ITooltipEventArgs } from '@syncfusion/ej2-heatmap';
HeatMap.Inject(Legend, Tooltip);
@Component({
  selector: 'app-get-image',
  templateUrl: './get-image.component.html',
  styleUrls: ['./get-image.component.css']
})

export class GetImageComponent implements OnInit {
  ctx: any;
  canvas: any;

  margin: Object;
  legendLabel: Object;
  legendCollection: Array<Object>;

  constructor() { 
    this.margin = { 'left': 25, 'right': 25 };
    this.legendLabel = { 'text': 'poor' };
    this.legendCollection = ['heatmaplegend'];

  }

  ngOnInit(): void { }
  onPress() {

    // }
    let heatmapData: Object = [
      [0.001591041, 0.001766328, 0.001955627, 0.002204865, 0.002606054, 0.003311166, 0.006544807, 0.007804204, 0.016584313, 0.016453859, 0.007761713
      ],
      [0.001066527, 0.001231494, 0.001284084, 0.001676408, 0.001896343, 0.00276861, 0.005592469, 0.006983264, 0.01575819, 0.016711339, 0.009733674
      ],
      [0.001637168, 0.00200219, 0.002320915, 0.002726187, 0.003037451, 0.003783007, 0.007953824, 0.011220795, 0.026108026, 0.023873691, 0.01584662
      ],
      [0.001674726, 0.00181811, 0.002172849, 0.002648256, 0.002982496, 0.003539262, 0.007134474, 0.008616106, 0.024988285, 0.028005255, 0.016445598
      ],
      [0.001663178, 0.001891635, 0.0020988, 0.002454874, 0.003006563, 0.003979412, 0.006938811, 0.006890489, 0.008277944, 0.017900947, 0.004043329
      ],
      [0.001089169, 0.001151778, 0.001296484, 0.001496423, 0.001940218, 0.002405579, 0.005441019, 0.00710542, 0.016301248, 0.019519704, 0.011427373
      ],
      [0.001211499, 0.001458469, 0.001549436, 0.001891656, 0.002214366, 0.002859583, 0.00600499, 0.007438883, 0.016189945, 0.016791935, 0.008678003
      ],
      [0.001234806, 0.001383507, 0.001564882, 0.001832003, 0.002235327, 0.002931277, 0.005959108, 0.007163188, 0.015955144, 0.016313122, 0.008343579
      ],
      [0.00123256, 0.001377139, 0.001603912, 0.001848702, 0.002249287, 0.002973699, 0.006030789, 0.00720503, 0.015961647, 0.016370588, 0.008311793
      ],
      [0.001228851, 0.001497069, 0.00167408, 0.001979723, 0.002310979, 0.002954148, 0.0060902, 0.007285497, 0.016027216, 0.01637267, 0.008220437
      ],
      [0.001258903, 0.001413202, 0.001664022, 0.001884077, 0.002227387, 0.002959146, 0.006105274, 0.007252341, 0.015884107, 0.016415163, 0.008357255
      ]
    ];
    let heatmap: HeatMap = new HeatMap({
      // Theme: HighContrast,
      titleSettings: {
        text: 'B-Scan Image of Data',
        textStyle: {
          size: '15px',
          fontWeight: '500',
          fontStyle: 'Normal',
          fontFamily: 'Segoe UI'
        }
      },
      xAxis: {
        //  labels: ['0', '1', '2', '3', '4', '5',
        //   '6', '7', '8', 'Russia', 'France', 'Japan'],
        // labelRotation: 45,
      //  labelIntersectAction: 'None',
      },

      yAxis: {
        // labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
      },
      tooltipSettings: {
        fill: '#696295',
        textStyle: {
          // color: '#FFFFFF',
          size: '0px'
        },
        border: {
          width: '0px',
          //  color: '#F0C27B',
          //  radius: '0px'
        }
      },
      paletteSettings: {
        //  colorGradientMode: 'Table',
        //  palette: [
        //    { color: 'rgb(255, 0, 0)' },
        //    { color: '#6C5B7B', label:'Moderate', value:0.002},
        //   { color: '#355C7D', label:'High', value: 0.003 }
        //   { color: '#C06C84'},
        //   { color: '#6C5B7B'},
        //  { color: '#355C7D'}
        // ]
        // type: "Gradient"
        palette: [
          // {
          //   startValue: 0,
          //   endValue: 0.05,
          //   minColor: "#FFFFFF",
          //   maxColor: " #FF0000 "
          // // }
          { value: 0.025, color: '#DC143C'},
          { value: 0.02, color: '#DEB887' },
          { value: 0.015, color: '#90EE90' },
          { value: 0.01, color: '#87CEEB' },
          { value: 0.005, color: '#0000CD' },
          // { value: 0.4, color: '#6C5B7B' },
          // { value: 0.5, color: '#000000' },
          // { value: 0.6, color: '#6C5B7B' },
          //  { value: 0.7, color: '#6C5B7B' },
          // { value: 0.8, color: '#6C5B7B' },
          //  { value: 0.9, color: '#6C5B7B' },
          //  { value: 0.01, color: '#FFFFFF' },
        ],
      },
      legendSettings: {
        visible: true
      },
      cellSettings: {
        border: { width: 0 },
        showLabel: false,
        enableCellHighlighting: true

      },
      showTooltip: true,
       zoomSettings:{
          enableSelectionZooming: true,
         enableDeferredZooming: false,
      //   enable:true,
         enableMouseWheelZooming: true,
      //   enablePinchZooming: true,
     
      //   zoomFactor:13,
      //   maxZoom: 25
       },
      tooltipRender: (args: ITooltipEventArgs) => {
        args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' %'];
      },
      dataSource: heatmapData
    });
    // this.heatmapCell = { showContent: “Hidden” }
    heatmap.appendTo('#element');
    //     this.canvas = document.getElementById('myCanvas');
    //     const ctx = this.canvas.getContext('2d');
    //     this.canvas.width = 850;
    //     this.canvas.height = 620;

    //     const image1 = new Image(); 
    //     image1.src = 'assets/Bsac.png';



    //     var imgData = ctx.createImageData(100, 100);
    //     var the_color = "rgba(0,0,255,alpha_token)";
    //     var h, w, column_width, column_height, x_pos, y_pos, radius;

    //     image1.addEventListener('load', function () {

    //      // ctx.beginPath();
    //       var imgData = ctx.createImageData(850, 620);
    //      // ctx.fill();
    //      // ctx.stroke();
    //      // ctx.closePath();
    //      //  ctx.drawImage(image1, 0, 0);
    //        var i;
    //        for (i = 0; i < imgData.data.length; i += 3) {
    //          imgData.data[i + 0] = 100;
    //          imgData.data[i + 1] = 0;
    //          imgData.data[i + 2] = 0;
    //        //  imgData.data[i + 3] = 0;
    //        }
    //       // ctx.putImageData(imgData, 0, 0);
    //     })
    //     // var c = document.getElementById("myCanvas");
    //     // var ctx = c.getContext("2d");
    //     //   const canvas = <HTMLCanvasElement>document.getElementById('myChart');
    //     //   this.ctx = canvas.getContext('2d');
    //     //   var imgData = this.ctx.createImageData(100, 100);

    //     //   var i;
    //     //   for (i = 0; i < imgData.data.length; i += 4) {
    //     //     imgData.data[i + 0] = 255;
    //     //     imgData.data[i + 1] = 0;
    //     //     imgData.data[i + 2] = 0;
    //     //     imgData.data[i + 3] = 255;
    //     //   }

    //     //   this.ctx.putImageData(imgData, 10, 10);
  }


}
// function entry(arg0: RegExp, entry: any): any {
//   throw new Error('Function not implemented.');
// }

