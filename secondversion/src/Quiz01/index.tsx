import { createContext,useState } from "react"
import { TS_Quiz } from "./TS_Quiz"
// https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react
export type TS_Context={
    SS_Quiz:TS_Quiz,
    setSS_Quiz:(S:TS_Quiz)=>void
    SS_ThisPage:number,
    setSS_ThisPage:(S:number)=>void,
    SS_Score:number,
    setSS_Score:(S:number)=>void

}

const Context=createContext<TS_Context>({
    SS_Quiz:{
        Question:[''],
        Choice:[['']],
        Answer:[0]
    },
    setSS_Quiz:()=>{},
    SS_ThisPage:0,
    setSS_ThisPage:()=>{},
    SS_Score:0,
    setSS_Score:()=>{}
})

const Component = (
{
}
:{
})=>{
    const [SS_Quiz,setSS_Quiz]=useState<TS_Quiz>({
      Question:[
          "What is A?",
          "What is B?",
          "What is C?",
      ],
      Choice:[
          ['a','b','c','d'],
          ['a','b','c','d'],
          ['a','b','c','d'],
      ],
      Answer:[
          0,
          1,
          2
      ]
    })
    const[SS_ThisPage,setSS_ThisPage]=useState<number>(0)
    const[SS_Score,setSS_Score]=useState<number>(0)

return(
<Context.Provider
  value={{
    value: value, 
    setValue: setValue, 
    value2: value2,
    setValue2: setValue2 
}}
>
</Context.Provider>
)
}

export default Component
