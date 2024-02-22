import './index.css'
const UI_Button = (
{
Color,
Text,
Function,
Key
}
:{
Color:string,
Text:string,
Function:(S:void)=>void,
Key:number
})=>{
return(

<button style={{backgroundColor:Color}} key={Key} onClick={()=>Function()}>{Text}</button>

)
}

export default UI_Button