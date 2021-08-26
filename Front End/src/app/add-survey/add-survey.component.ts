import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
//import { question } from 'src/model/question';

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {

  data = {
    questionList: [
      {
        question: "",
        questionType:"",
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
    //console.log(this.myForm.value);
    alert(this.myForm.value);
  }
 /* tempFun(index){
    let temp_array :any=[];
    temp_array.push(this.myForm.value);
    console.log("ADD Temp Array:");
    temp_array.splice(index,1);

    console.log(temp_array);
    temp_array.forEach(function(value,key){
      console.log("Printing values");
      alert(value);
      console.log(value);
    });
    alert(JSON.stringify(temp_array));
    //temp_array.pop(index);
     temp_array.splice(index,1);
     alert(JSON.stringify(temp_array));

  }  */
  addNewquestion(index) {
    let control = <FormArray>this.myForm.controls.questionList;
    console.log("Form Data");
    //this.tempFun(index);
    control.push(
      this.fb.group({
        question: [''],
        questionType:[''],
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
        questionType:x.questionType,
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
