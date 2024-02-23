import { DIFFICULT } from "./difficult";

export type TS_Quiz={
  type: string;
  difficulty: typeof DIFFICULT[number];
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  // https://opentdb.com/api_config.php
  // https://opentdb.com/api.php?amount=10
}

export type TS_OptionAns=TS_Quiz & {options:string[]}