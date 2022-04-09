import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';
@Component({
  selector: 'app-end-quiz',
  templateUrl: './end-quiz.component.html',
  styleUrls: ['./end-quiz.component.css']
})
export class EndQuizComponent implements OnInit {

  score! :number;
  constructor(private quizservice:QuizService ) { }

  ngOnInit(): void {
    this.quizservice.currentScore.subscribe(score => this.score = score);
  }

}
