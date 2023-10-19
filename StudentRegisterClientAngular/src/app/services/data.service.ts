import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { STUDENTDATA } from '../Model/STUDENTDATA';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}
  getStudentData(): Observable<STUDENTDATA[]> {
    return this.http.get<STUDENTDATA[]>('http://localhost:8080');
  }

  postStudentData(data: STUDENTDATA): Observable<STUDENTDATA> {
    return this.http.post<STUDENTDATA>(
      'http://localhost:8080/addBasicDetails',
      data,
      this.httpOptions
    );
  }
}
