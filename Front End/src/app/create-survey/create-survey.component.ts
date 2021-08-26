import { Component, OnInit } from '@angular/core';
import { AddSurveyService } from 'src/services/add-survey.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  sid;
  constructor(private _survey:AddSurveyService,private snack:MatSnackBar, private _route:ActivatedRoute) { }
  surveyData ={
    
    name :'',
    description :'',
    link :'',
    lastEditedBy :'',
    status :'',
  }
  ngOnInit(): void {
    this.sid=this._route.snapshot.params.sid;
    //alert(this.sid)
  }

  //Add Survey
  addSurvey(){
    console.log(this.surveyData);

    if(this.surveyData.name == '' || this.surveyData.name == null){
      // alert('username is required!');
      this.snack.open(" Name is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      return;
    }
    if(this.surveyData.description == '' || this.surveyData.description == null){
      // alert('username is required!');
      this.snack.open(" Description is required!", 'OK', {duration:3000, verticalPosition:'top', horizontalPosition:'center'});
      return;
    }
    //call server
    this._survey.addSurvey(this.surveyData).subscribe(
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










// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
// import { Survey, Question, Option } from './data-models';
// export interface QuestionType {
//   value: string;
//   viewValue: string;
// }

// @Component({
//   selector: 'app-create-survey',
//   templateUrl: './create-survey.component.html',
//   styleUrls: ['./create-survey.component.css']
// })

// export class CreateSurveyComponent implements OnInit {
//  surveyForm! : FormGroup ;

//   selectedOption = [] as any;

//   editMode = false;
//   surveyTypes = [
//     { id: 0, value: 'Training' },
//     { id: 1, value: 'HR' }
//   ];


//   questions: QuestionType[] = [
//     { value: 'Single choice', viewValue: 'Single choice' },
//     { value: 'Multi choice', viewValue: 'Multi choice' },
//     { value: 'Text', viewValue: 'Text' },
//     { value: 'Rating', viewValue: 'Rating' }
//   ];


//   constructor(
//     // private surveyService: SurveyService,

//   ) { }

//   ngOnInit() {
//     this.initForm();

//   }

//   private initForm() {
//     let surveyTitle = '';
//     let surveyType = '';
//     let surveyQuestions = new FormArray([]);

//     this.surveyForm = new FormGroup({
//       'surveyTitle': new FormControl(surveyTitle, [Validators.required]),
//       'surveyType': new FormControl(surveyType, [Validators.required]),
//       'surveyQuestions': surveyQuestions,
//       'IsAnonymous': new FormControl(false, [Validators.required])
//     });

//     this.onAddQuestion();

//   }

//   onAddQuestion() {
//     console.log(this.surveyForm);
   
//     const surveyQuestionItem = new FormGroup({
//       'questionTitle': new FormControl('', Validators.required),
//       'questionType': new FormControl('', Validators.required),
//       'questionGroup': new FormGroup({})
//     });

//     (<FormArray>this.surveyForm.get('surveyQuestions')).push(surveyQuestionItem);

//   }

//   onRemoveQuestion(index: any) {

  
//     this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup = new FormGroup({});
//     this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionType = new FormControl({});

//     (<FormArray>this.surveyForm.get('surveyQuestions')).removeAt(index);
//     this.selectedOption.splice(index,1);
//     console.log(this.surveyForm);

//   }


//   onSeletQuestionType(questionType, index) {
//     if (questionType === 'Single choice' || questionType === 'Multi choice') {
//       this.addOptionControls(questionType, index)
//     }
//   }

//   addOptionControls(questionType: any, index: string | number) {

//     let options = new FormArray([]);
//     let showRemarksBox = new FormControl(false);


//     (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('options', options);
//     (this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup).addControl('showRemarksBox', showRemarksBox);

//     this.clearFormArray((<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options));

//     this.addOption(index);
//     this.addOption(index);
//   }


//   private clearFormArray(formArray: FormArray) {
//     while (formArray.length !== 0) {
//       formArray.removeAt(0)
//     }
//   }


//   addOption(index: any) {
//     const optionGroup = new FormGroup({
//       'optionText': new FormControl('', Validators.required),
//     });
//     (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][index].controls.questionGroup.controls.options).push(optionGroup);
//   }

//   removeOption(questionIndex, itemIndex) {
//     (<FormArray>this.surveyForm.controls.surveyQuestions['controls'][questionIndex].controls.questionGroup.controls.options).removeAt(itemIndex);
//   }







//   postSurvey() {

//     let formData = this.surveyForm.value;
//     console.log(formData);

//     console.log();
//     let ID = 0;
//     let Type = formData.surveyType;
//     let Title = formData.surveyTitle;
//     let IsDeleted = false;
//     let IsAnonymous = formData.IsAnonymous;
//     //  let Question: Question[] = [];
//     let Questions = [];

//     let surveyQuestions = formData.surveyQuestions;
//     let oArray = formData.surveyQuestions[0].questionGroup.options[0].optionText
//     let survey = new Survey(ID, Type, Title, IsDeleted, IsAnonymous, Questions);


//     surveyQuestions.forEach((question, index, array) => {


//       let questionItem = {
//         'ID': 0,
//         "Type": question.questionType,
//         "Text": question.questionTitle,
//         "options": [],
//         "Required": false,
//         "Remarks": "",
//         "hasRemarks": false

//       }
//       if (question.questionGroup.hasOwnProperty('showRemarksBox')) {
//         questionItem.hasRemarks = question.questionGroup.showRemarksBox;
//       }


//       if (question.questionGroup.hasOwnProperty('options')) {



//         question.questionGroup.options.forEach((option: { optionText: any; }) => {
//           let optionItem: Option = {
//             "ID": 0,
//             "OptionText": option.optionText,
//             "OptionColor": "",
//             "hasRemarks": false

//           }
//           questionItem.options.push(optionItem)
//         });
//       }

 
//       survey.Question.push(questionItem)


//     });


//     console.log(survey);
//     console.log('posting survey');


//   }


//   onSubmit() {

//     this.postSurvey();

//   }






// }