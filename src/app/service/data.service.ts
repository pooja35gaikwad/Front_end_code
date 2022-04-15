import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  getRangeDopplerImageMatrix() {
    return this.http.get<MatrixData>('http://localhost:8070/getRangeDopplerImage')
  }
  
  getSVDTarget() {
    return this.http.get<MatrixData>('http://localhost:8070/getTargetFromSVD')
  }

  getSVDClutter() {
    return this.http.get<MatrixData>('http://localhost:8070/getClutterFromSVD')
  }

  getStDeviation() {
    return this.http.get<number[]>('http://localhost:8070/getStDeviation')
  }

  getHighPeak() {
    return this.http.get<number[]>('http://localhost:8070/getSingleHighPeak')
  }


  setParameters(freqParams){
    return this.http.post(
                `http://localhost:8070/setParameters`
                , freqParams);
  }
  uploadfile(file: File){
    let formParams = new FormData();
    formParams.append('file', file)
    return this.http.post(
                `http://localhost:8070/upload`
                , formParams);
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST', `http://localhost:8070/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  uploadfile1(file: File){
    let formParams = new FormData();
    formParams.append('file', file)
    return this.http.post(
                `http://localhost:8070/uploadMultiple`
                , formParams);
  }

  upload1(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('files', file);
    const req = new HttpRequest('POST', `http://localhost:8070/uploadMultiple`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }


  getFiles(): Observable<any> {
    return this.http.get(`http://localhost:8070/files`);
  }
}