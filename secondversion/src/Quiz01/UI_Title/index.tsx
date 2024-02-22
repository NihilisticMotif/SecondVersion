import './index.css'
const UI_Title = (
{
Text,
Display='block',
FontSize=16
}
:{
Text:string,
Display?:string
FontSize?:number
})=>{
// https://stackoverflow.com/questions/23206795/p-tag-inside-div-setting-margin-top-to-p-tag-pushes-parent-div-down-too
return(
<h1 style={{display:Display,fontSize:FontSize.toString()+'px'}}>{Text}</h1>
)
}

export default UI_Title