import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayQuestionServiceService } from '../services/display-question-service.service';

@Component({
  selector: 'app-display-question',
  templateUrl: './display-question.component.html',
  styleUrls: ['./display-question.component.css']
})
export class DisplayQuestionComponent implements OnInit {

  survey_id;
  name;
  questions = [];
  constructor(
    private _route:ActivatedRoute,
    private _display:DisplayQuestionServiceService
  ) { }

  ngOnInit() {
    this.survey_id=this._route.snapshot.params.id;
    this.name=this._route.snapshot.params.name;
    console.log(this.survey_id);
    console.log(this.name);

    this._display.displayQuestion(this.survey_id).subscribe(
      (data:any) => {
        this.questions = data;
        console.log(this.questions);

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
