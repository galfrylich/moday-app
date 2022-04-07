export interface Question {
    category: string;
    type: string;
    question:string;
    difficulty:string;
    correct_answer:string;
    incorrect_answers: string[]
  }