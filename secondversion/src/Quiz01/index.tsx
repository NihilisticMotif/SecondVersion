import './index.css'
import { useState } from "react"
// https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/
// https://www.freecodecamp.org/news/css-background-image-with-html-example-code/
// https://www.amazon.com/Weezer-Blue-Album/dp/B000003TAW
import img from './img/Weeb.jpg'
import { TS_Quiz } from "./TS_Quiz"
// https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react
import My_Context from "./Context"
import Page from "./Page"
import let_Q1 from './Problem/limit'
import let_Q2 from './Problem/quadratic'
import { shuffle } from './Problem/utility'
const Component = (
{
}
:{
})=>{
const [SS_Quiz,setSS_Quiz]=useState<TS_Quiz[]>(shuffle(let_Q1.concat(let_Q2)))
const[SS_ThisPage,setSS_ThisPage]=useState<number>(0)
const[SS_Score,setSS_Score]=useState<number>(0)

return(
<div style={{
    backgroundImage: `url(${img})`,
}}
className='OuterDiv'
>

<My_Context.Provider
value={{
    Quiz:SS_Quiz,
    setQuiz:setSS_Quiz,
    Score:SS_Score,
    setScore:setSS_Score,
    ThisPage:SS_ThisPage,
    setThisPage:setSS_ThisPage,
}}
>
<Page/>
</My_Context.Provider>

</div>
)
}
// rgb(2,153,210)
// #0299D2
export default Component
