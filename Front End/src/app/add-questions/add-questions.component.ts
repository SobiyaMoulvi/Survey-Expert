import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'app-add-questions',
    templateUrl: './add-questions.component.html',
    styleUrls: ['./add-questions.component.css']
  })
  export class AddQuestionsComponent implements OnInit {

  data = {
    questionList: [
      {
        question: "",
        optionList: [
          {
            option: "",
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: [''],
      questionList: this.fb.array([])
    })

    this.setquestionList();
  }

  onSubmit() {
    alert(this.myForm.value);
  }

  addNewquestion() {
    let control = <FormArray>this.myForm.controls.questionList;
    control.push(
      this.fb.group({
        question: [''],
        optionList: this.fb.array([])
      })
    )
  }

  deletequestion(index) {
    let control = <FormArray>this.myForm.controls.questionList;
    control.removeAt(index)
  }

  addNewoption(control) {
    control.push(
      this.fb.group({
        option: ['']
      }))
  }

  deleteoption(control, index) {
    control.removeAt(index)
  }

  setquestionList() {
    let control = <FormArray>this.myForm.controls.questionList;
    this.data.questionList.forEach(x => {
      control.push(this.fb.group({ 
        question: x.question, 
        optionList: this.setoptionList(x) }))
    })
  }

  setoptionList(x) {
    let arr = new FormArray([])
    x.optionList.forEach(y => {
      arr.push(this.fb.group({ 
        option: y.option 
      }))
    })
    return arr;
  }

}








// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-add-questions',
//   templateUrl: './add-questions.component.html',
//   styleUrls: ['./add-questions.component.css']
// })
// export class AddQuestionsComponent implements OnInit {

//   //Qid: any;
//   question ={ 
//     quiz: {},
//     content :'',
//     type :'',
//     option1 :'',
//     option2 :'',
//     option3 :'',
//     option4 :'',
//   }
//   constructor() { 

//   }

//   ngOnInit(): void {
//   }

// }







// import { Component, OnInit } from '@angular/core';
// import { questionOption } from 'src/model/questionOption';
// import { question } from 'src/model/question';

// @Component({
//   selector: 'app-add-questions',
//   templateUrl: './add-questions.component.html',
//   styleUrls: ['./add-questions.component.css']
// })
// export class AddQuestionsComponent implements OnInit {
//   question = new question();
//   option = new questionOption();
//   qArray:question[]=[];
//   oArray:questionOption[]=[];
//   constructor() { }

//   ngOnInit() {
//   }

//   addForm()
//   {
//     this.question=new question()
//     this.qArray.push(this.question);
//   }

//   addOption()
//   {
//     this.option=new questionOption()
//     this.oArray.push(this.option);
//   }

//   removeForm(index)
//   {
//     this.qArray.splice(index,1);
//   }

//   removeOption(index)
//   {
//     this.oArray.splice(index,1);
//   }

//   onsubmit()
//   {
//     console.log(this.qArray);
//   }

// }