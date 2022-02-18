import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class CSVDataBean {
  constructor(public freq: BigInteger[],
    public real: Float32List[], public img: string[], public magnitude: number, public fftMagnitude: number) {

  }
}
export class MatrixData {
  constructor(public matrix: number[][],
  ) {

  }
}
export class FreqParams {
  constructor(
    public startFreq: number,
    public stopFreq: number,
    public noOfPoints: number,

  ) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  executeMethod() {
    return this.http.get<CSVDataBean>('http://localhost:8070/getCsv')
    //  console.log("Hello-world-bean-service");
  }

  getMatrix() {
    return this.http.get<MatrixData>('http://localhost:8070/getBScan')
  }

  getMeanSubtractedMatrix() {
    return this.http.get<MatrixData>('http://localhost:8070/getMeanSubtractedBScan')
  }

  setParameters(freqParams){
    return this.http.post(
                `http://localhost:8070/setParameters`
                , freqParams);
  }
}