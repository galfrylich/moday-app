import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/quiz.service';
import { Question } from 'src/Question';
import { interval } from 'rxjs';
import {Router} from "@angular/router"
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  name!:string;
  error: any;
  questions: Question[] =[] ;
  public currentQuestion: number = 0;
  public points : number =0;
  public counter: number = 30;
  public timer$: any;
  public correctAnswer =0;
  public incorrectAnswer =0;
  
  
  constructor(private quizservice: QuizService,private router: Router) { }
  
   
  ngOnInit(): void {
    this.quizservice.currentName.subscribe(name =>this.name = name);
    this.StratTimer();

    this.quizservice.getQestions().subscribe((questions) => {
      this.questions = questions.results;
       this.questions.map((question =>{
        question.all_answers = question.incorrect_answers.concat(question.correct_answer);
      }))
      
      console.log(this.questions)
      
    },
      (err: any) => {
        this.error = err;
      }
    );

  }

  score(questionNum:number, answer:string,){
    if(this.questions[questionNum].correct_answer === answer){
      //this.correctAnswer = true;
      this.points +=  10;
      this.correctAnswer++;
      this.stopTimer();
      
    } 
    else{
        this.incorrectAnswer++;
        this.stopTimer();
    }
    
    if(this.currentQuestion >= this.questions.length-1){
      setTimeout(()=> {
        this.quizservice.setScore(this.points);
        this.router.navigate(['endQuiz'])
        this.stopTimer();
        
      }, 1000);
     
    }
    this.createDelay();
    
  }

  StratTimer(){
     this.timer$ = interval(1000).subscribe(time=>{
      if(this.counter === 0){
        this.currentQuestion++;
        this.counter = 30;
      }
      this.counter--;

    })
  }
  stopTimer(){
    this.timer$.unsubscribe();
  }
  resetTimer(){
   
    this.counter = 30;
    this.StratTimer();
  }

  createDelay(){
    setTimeout(()=> {
      this.currentQuestion++
      this.resetTimer();
      
    }, 1000);
  }
  

}
