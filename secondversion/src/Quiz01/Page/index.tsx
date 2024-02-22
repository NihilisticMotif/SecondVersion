import './index.css'
import UI_Title from "../UI_Title"
import UI_Button from "../UI_Button"
import My_Context from "../Context"
import { useState,useEffect,useContext } from "react"
const Page = (
{
}
:{
})=>{
// SS = SetState
const SS=useContext(My_Context)
const[SS_IsOpen,setSS_IsOpen]=useState<boolean>(false)
const[SS_IsAns,setSS_IsAns]=useState<boolean>(false)
const[SS_Answer,setSS_Answer]=useState<number|null>(null)

useEffect(()=>{
if(SS_Answer===SS.Quiz[SS.ThisPage].Answer){
SS.setScore(SS.Score+1)
}
},[SS_Answer])

useEffect(()=>{
setSS_IsAns(false)
setSS_Answer(null)
},[SS.ThisPage])

useEffect(()=>{
if(0===SS.ThisPage){
SS.setScore(0)
}
},[SS.ThisPage])

function f_Answer(index:number){
    if(SS_IsAns===false){
        setSS_IsAns(true)
        setSS_Answer(index)
    }
}

let JSX_Space=<div style={{height:'10px'}}></div>
let JSX_Space2=<div style={{marginTop:'-10px'}}></div>

let JSX_Title=<UI_Title Text={'React Quiz'} FontSize={30} Display={'inline-block'}/>
// Display={'inline-block'}

let let_Start='Start'
if(SS_IsOpen===true){
    let_Start='Try Again'
}

// Start and End
let JSX_Start=<></>
let JSX_Score=<UI_Title Text={"Score "+SS.Score.toString()}/>
let JSX_Question=<>
{JSX_Space2}
<UI_Title Text={"Question:"+SS.ThisPage.toString()+'/'+SS.Quiz.length.toString()}/>
{JSX_Space}
<UI_Title Text={SS.Quiz[SS.ThisPage].Question}/>
</>
let JSX_Answer=<div>
{
SS.Quiz[SS.ThisPage].Options.map((i,index)=>{
if(SS_IsAns===false){
return <li style={{marginTop:'5px'}}><UI_Button
Color={'white'}
Text={i}
Function={()=>f_Answer(index)}
Key={index}
/></li>
}
else{
let let_Color='white'
if(index===SS.Quiz[SS.ThisPage].Answer){
let_Color='green'
}
if(index===SS_Answer&& SS_Answer!==SS.Quiz[SS.ThisPage].Answer){
let_Color='red'
}
return <li style={{marginTop:'5px'}}><UI_Button
Color={let_Color}
Text={i}
Function={()=>{}}
Key={index}
/></li>
}
})
}
</div>
let JSX_Next =<UI_Button 
Color={'white'} 
Text="Next Question" 
Function={()=>{
    SS.setThisPage((SS.ThisPage+1)%SS.Quiz.length);
}}
Key={-1}
/>

let JSX_Body=<div className='InnerDiv2'>
{
JSX_Question
}
{
JSX_Answer
}
</div>

if(SS_IsOpen===false){
JSX_Start=<UI_Button 
Color={'white'} 
Text={let_Start}
Function={()=>setSS_IsOpen(true)}
Key={-2}
/>
JSX_Score=<></>
JSX_Body=<></>
JSX_Next=<></>
}

if(SS_IsAns===false){
JSX_Next=<></>
}

if(SS_IsAns===true){
JSX_Next =<UI_Button 
Color={'white'} 
Text="Next Question" 
Function={()=>{
    SS.setThisPage((SS.ThisPage+1)%SS.Quiz.length);
}}
Key={-1}
/>
}

if(SS.ThisPage===SS.Quiz.length-1&&SS_IsAns===false){
JSX_Start=<></>
JSX_Next =<></>
}

if(SS.ThisPage===SS.Quiz.length-1&&SS_IsAns===true){
JSX_Start=<UI_Button 
Color={'white'} 
Text={let_Start}
Function={()=>SS.setThisPage(0)}
Key={-2}
/>
JSX_Next =<></>
}

return(
<div className='InnerDiv'>
{JSX_Title}
{
JSX_Score
}
{
JSX_Body
}
{JSX_Space}
{
JSX_Next
}
{
JSX_Start
}
</div>
)
}

export default Page