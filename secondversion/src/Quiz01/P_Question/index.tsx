import UI_Title from "../UI_Title"
const Component = (
{
SS_PageNo,
Length,
Text
}
:{
SS_PageNo:number
Length:number
Text:string
})=>{
return(
<div>
<UI_Title Text={"Question: "+SS_PageNo.toString()+"/"+Length.toString()}/>
<UI_Title Text={Text}/>
</div>
)
}

export default Component