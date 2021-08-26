import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { survey } from 'src/model/survey';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import baseUrl from './base-url';

@Injectable({
  providedIn: 'root'
})

export class ViewSurveysService {

  // url= "http://localhost:8080/survey/allSurveys"

  constructor(private _http:HttpClient) { }

  public getSurveys(): Observable<any>{
    console.log("From service");
    console.log(this._http.get(`${baseUrl}/survey/allSurveys`));
    return this._http.get(`${baseUrl}/survey/allSurveys`);
  }
}
