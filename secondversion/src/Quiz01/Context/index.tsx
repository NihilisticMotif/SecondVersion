import { createContext,useState } from "react"
import { TS_Quiz } from ".././TS_Quiz"
// https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react
export type TS_Context={
    Quiz:TS_Quiz[],
    setQuiz:(S:TS_Quiz[])=>void
    ThisPage:number,
    setThisPage:(S:number)=>void,
    Score:number,
    setScore:(S:number)=>void
}

const My_Context=createContext<TS_Context>({
    Quiz:[{
  Question:"What is A?",
  Options:['a','b','c','d'],
  Answer:0
},
{
  Question:"What is D?",
  Options:['a','b','c','d'],
  Answer:3
},
{
  Question:"What is B?",
  Options:['a','b','c','d'],
  Answer:1
}],
    setQuiz:()=>{},
    ThisPage:0,
    setThisPage:()=>{},
    Score:0,
    setScore:()=>{},
})

export default My_Context