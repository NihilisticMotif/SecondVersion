import { useState,useEffect } from "react"
import { API } from "./API/index"
import { resolve } from "path"
const Quiz02=(
{}:{}
)=>{
const[SS_IsLoad,setSS_IsLoad]=useState<boolean>(false)
const[SS_IsAns,setSS_IsAns]=useState<boolean>(false)
const[SS_UserAns,setSS_UserAns]=useState<number|null>(null)
const[SS,setSS]=useState<any>()
useEffect(() => {
    let name = "Joshua";
    const init = async () => {
      const _profile = await githubService.getProfile(name);
      setSS(_profile);
    };
    init();
}, []);

let data=API//(10,0)

return (
<>
{data}
</>
)
}


export default Quiz02