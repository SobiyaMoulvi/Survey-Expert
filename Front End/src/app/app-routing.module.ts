import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PreviousSurveyComponent } from './previous-survey/previous-survey.component';
import { SurveyAnalysisComponent } from './survey-analysis/survey-analysis.component';
//import { SurveyCreationComponent } from './survey-creation/survey-creation.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SurveyDisplayComponent} from './survey-display/survey-display.component'
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { AuthGuard } from 'src/services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { NormalGuard } from 'src/services/normal.guard';
import { AddnewQuestionComponent } from './addnew-question/addnew-question.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DisplayQuestionComponent } from './display-question/display-question.component';
import { GiveSurveyComponent } from './give-survey/give-survey.component';

const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'userLogin', component : UserLoginComponent},
  {
    path : 'adminHome', 
    component : AdminHomeComponent,
    canActivate :  [AuthGuard],    
    
     
  },
  {
    path : 'dashboard',
    component:AdminDashboardComponent,
    children:
    [
      {path : 'createSurvey', component : CreateSurveyComponent},
      {path : 'previousSurvey', component : PreviousSurveyComponent},
      {path : 'newQuestion/:sid', component: AddnewQuestionComponent},
      {path : 'displayQuestion/:id/:name',component: DisplayQuestionComponent},
    ]
  
  },
  {path : 'giveSurvey/:sid',component: GiveSurveyComponent,canActivate : [NormalGuard]},
  
  {path : 'addSurvey', component : AddSurveyComponent},

  //{path : 'createSurvey', component : CreateSurveyComponent},
  //{path : 'previousSurvey', component : PreviousSurveyComponent},
  {path : 'analysis', component : SurveyAnalysisComponent},
  {path : 'userHome', component : UserHomeComponent, canActivate : [NormalGuard]},
  {path : 'giveSurvey', component : SurveyDisplayComponent},
  {path : 'addQuestion', component : AddQuestionsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
