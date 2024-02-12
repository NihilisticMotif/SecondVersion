import UI_Title from "../UI_Title"
import { useContext } from "react"
import My_Context from '../index'
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
const {SS_ThisPage} = useContext(My_Context);
return(
<div>
<UI_Title Text={"Question: "+SS_PageNo.toString()+"/"+Length.toString()}/>
<UI_Title Text={Text}/>
</div>
)
}

export default Component