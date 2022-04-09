import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  name!: string;
  subscription!: Subscription;
  constructor(private quizservice:QuizService ) { }

  ngOnInit(): void {
    this.quizservice.currentName.subscribe(name =>this.name = name);
  }


  startQuiz(name: string){
    this.quizservice.changeName(name);
  }
}
