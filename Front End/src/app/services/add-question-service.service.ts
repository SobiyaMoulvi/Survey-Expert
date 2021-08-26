import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionServiceService {

  constructor(private _http:HttpClient) { }
  baseurl  = "http://localhost:8080"

  public addQuestion(question){
    return this._http.post(`${this.baseurl}/question/addQuestion`,question);

  }
}
