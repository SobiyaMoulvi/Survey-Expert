import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayQuestionServiceService {
  baseurl  = "http://localhost:8080"

  constructor(private _http:HttpClient) { }

  displayQuestion(survey_id){
    return this._http.get(`${this.baseurl}/question/survey/${survey_id}`);

  }
}
