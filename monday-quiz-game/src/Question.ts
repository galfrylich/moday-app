export interface Question {
    all_answers: string[];
    category: string;
    type: string;
    question:string;
    difficulty:string;
    correct_answer:string;
    incorrect_answers: string[]
  }