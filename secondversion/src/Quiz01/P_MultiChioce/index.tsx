import UI_Button from "../UI_Button"
import { useEffect, useState } from "react"
const P_MultiChioce = (
{
Choice,
Click,
Correct,
SS_Score,
setSS_Score
}
:{
Choice:string[]
Click:number|null 
Correct:number,
SS_Score:number,
setSS_Score:(S:number)=>void
})=>{
const [SS_Select,setSS_Select]=useState<number|null>(Click)
useEffect(()=>{
if(SS_Select){
    if(Correct===SS_Select){
        setSS_Score(SS_Score+1)
    }
}
},[SS_Select])
let JSX_Choice=Choice.map((i,index)=>{
let let_color="white"
if(SS_Select){
    if(index===SS_Select){
        if (index!==Correct){
        let_color='red'
        }
    }
    if(index===Correct){
    let_color='green'
    }
}
return <UI_Button
Color={let_color}
Text={i}
Function={()=>setSS_Select(index)}
Key={index}
/>
})

return(
<div>
{JSX_Choice}
</div>
)
}

export default P_MultiChioce