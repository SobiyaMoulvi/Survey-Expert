import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AddQuestionService } from 'src/services/add-question.service';
import Swal from 'sweetalert2';
import { AddQuestionServiceService } from '../services/add-question-service.service';

@Component({
  selector: 'app-addnew-question',
  templateUrl: './addnew-question.component.html',
  styleUrls: ['./addnew-question.component.css']
})
export class AddnewQuestionComponent implements OnInit {
  survey_id;
  question ={ 
    survey: {},
    question_text :'',
    answer_type :'',
    option1 :'',
    option2 :'',
    option3 :'',
    option4 :'',
  }
  
  constructor(private _question:AddQuestionServiceService,private snack:MatSnackBar,private _route:ActivatedRoute) { }

  ngOnInit() {
    this.survey_id=this._route.snapshot.params.sid;
    this.question.survey['survey_id']=this.survey_id;
  }


  addQuestion(){
    console.log(this.question);

    if(this.question.question_text == '' || this.question.question_text == null){
      // alert('username is required!');
      this.snack.open(" Content is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      return;
    }
    if(this.question.answer_type == '' || this.question.answer_type == null){
      // alert('username is required!');
      this.snack.open(" Type is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      return;
    }
    //call server
    this._question.addQuestion(this.question).subscribe(
    (success)=>{
      Swal.fire('Success','Survey Added Succesfully','success')
    },
    (error)=>{
      Swal.fire('Error','Error while adding Survey','error')
      console.log(error);
    }
    );
  }


  
}
