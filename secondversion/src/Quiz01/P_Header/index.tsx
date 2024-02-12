import UI_Title from "../UI_Title"
const P_Header = (
{
SS_Score
}
:{
SS_Score:number
})=>{

return(
<div>
<UI_Title Text={'React Quiz'}/>
<UI_Title Text={"Score "+SS_Score.toString()}/>
</div>
)
}

export default P_Header