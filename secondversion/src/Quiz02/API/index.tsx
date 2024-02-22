import { shuffle } from "../utility/shuffle";
import { TS_Quiz } from "./type";
import { DIFFICULT } from "./difficult";
// What is ?
// * TS_Quiz & { answers: string[] }
// * Promise
// * async
// * await

export type QuizState = TS_Quiz & { answers: string[] };

export const FetchQuiz = async (amount: number, difficulty: typeof DIFFICULT[number]): Promise<QuizState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: TS_Quiz ) => ({
    ...question,
    answers: shuffle([...question.incorrect_answers, question.correct_answer])
  }))
};