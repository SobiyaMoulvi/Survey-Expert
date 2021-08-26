import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { survey } from 'src/model/survey';
import { ViewSurveysService } from 'src/services/view-surveys.service';

@Component({
  selector: 'app-previous-survey',
  templateUrl: './previous-survey.component.html',
  styleUrls: ['./previous-survey.component.css']
})
export class PreviousSurveyComponent implements OnInit {

  /* surveys = {
    name : '',
    description :'',
  } */
  surveys : any[] = [];
  public errorMsg: any;
  survey_id = 0;
  text;
  constructor(private _view: ViewSurveysService,private _route:ActivatedRoute,private clipboardService: ClipboardService,private snack:MatSnackBar) { }
  ngOnInit() {

    this.survey_id=this._route.snapshot.params.sid;
    console.log("IDD");
    console.log(this.survey_id);

    //alert(this.survey_id);

    this._view.getSurveys().subscribe(
      (data:any) => {
        this.surveys = data;
        console.log(this.surveys);

      },
      (error) => {
        console.log(error);
      }
    );
  }

  copyContent(surveyid) {
    this.text="http://localhost:4200/giveSurvey/"+surveyid;

    this.clipboardService.copyFromContent(this.text)
    this.snack.open(" Link  Copied!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});

  }

}
