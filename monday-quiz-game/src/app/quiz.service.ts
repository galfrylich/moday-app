import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  apiUrl="https://opentdb.com/api.php?amount=100"

  constructor(private http: HttpClient) { }
  private nameSource = new BehaviorSubject('');
  currentName = this.nameSource.asObservable();

  private scoreSource = new BehaviorSubject(0);
  currentScore = this.scoreSource.asObservable();

  getQestions() {
    return this.http.get<any>(this.apiUrl);
  }

  changeName(name: string) {
    this.nameSource.next(name)
  }

  setScore(score: number) {
    this.scoreSource.next(score)
  }
  
}

