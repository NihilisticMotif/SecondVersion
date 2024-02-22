import { TS_Quiz } from "../TS_Quiz"
import { randomIntFromInterval,RandomArray } from "./utility"

let let_Q1:TS_Quiz[]=[]

for(let i=0;i<5;i++){
  let a = randomIntFromInterval(1, 10)
  let b = randomIntFromInterval(-10, 10)
  let c = randomIntFromInterval(1, 10)
  let d = randomIntFromInterval(-10, 10)
  let f = randomIntFromInterval(1, 10)
  let x= (-d/(c))
  let ans = randomIntFromInterval(0, 4)
  let let_Options=RandomArray()
  let_Options[ans]=((a*x+b)/f).toFixed(2).toString()
  let let_Quiz:TS_Quiz={
    Question:"lim x=>"+x.toFixed(2).toString()+" ("+(a*c).toString()+"x^2 + "+(a*d+b*c).toString()+" x + "+(b*d).toString()+")/("+(f*c).toString()+"x + "+(f*d).toString()+") = ?",
    Options:let_Options,
    Answer:ans
  }
  let_Q1.push(let_Quiz)
}

export default let_Q1