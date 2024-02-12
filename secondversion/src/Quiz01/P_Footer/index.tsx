import UI_Button from "../UI_Button"

import { useContext } from "react"
const Component = (
{
SS_PageNo,
setSS_PageNo,
}
:{
SS_PageNo:number,
setSS_PageNo:(S:number)=>void
})=>{

return(
<div>
<UI_Button 
Color={'white'} 
Text="Next Question" 
Function={()=>setSS_PageNo(SS_PageNo+1)}
Key={-1}
/>
</div>
)
}

export default Component