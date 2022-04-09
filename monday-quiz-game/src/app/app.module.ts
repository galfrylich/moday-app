import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionComponent } from './question/question.component';
import { HeaderComponent } from './header/header.component';
import { ButtonChangeDirective } from './button-change.directive';
import { EndQuizComponent } from './end-quiz/end-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    QuestionComponent,
    HeaderComponent,
    ButtonChangeDirective,
    EndQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
