import { DIFFICULT } from "./difficult";

export type TS_Quiz={
  category: string;
  correct_answer: string;
  difficulty: typeof DIFFICULT[number];
  incorrect_answers: string[];
  question: string;
  type: string;
}
