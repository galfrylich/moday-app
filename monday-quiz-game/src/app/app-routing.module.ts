import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndQuizComponent } from './end-quiz/end-quiz.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:"full"},
  {path:"home", component:HomepageComponent},
  {path:"question", component:QuestionComponent},
  {path:"endQuiz", component:EndQuizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
