import { TS_Quiz } from "../TS_Quiz"
import { randomIntFromInterval,RandomArray } from "./utility"

let let_Q2:TS_Quiz[]=[]

for(let i=0;i<5;i++){
  let a = randomIntFromInterval(1, 10)
  let b = randomIntFromInterval(-10, 10)
  let c = randomIntFromInterval(-10, 10)
  let d = randomIntFromInterval(-10, 10)
  let ans = randomIntFromInterval(0, 4)
  let let_Options=RandomArray()
  let_Options[ans]=(-b/a).toFixed(2).toString()
  let let_Quiz:TS_Quiz={
    Question:(a*c).toString()+"x^2 + "+(a*d+b*c).toString()+" x + "+(b*d).toString()+" = 0, What is x?",
    Options:let_Options,
    Answer:ans
  }
  let_Q2.push(let_Quiz)
}

export default let_Q2