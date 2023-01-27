import { useNavigate } from "react-router-dom"
// import { RenderComp } from "../States/Misc"
import { UserLog } from "../States/UserRelated"

import { useRecoilValue } from "recoil"

import HomeComp from "../Components/HomeComp"

function Home() {

    let navigate = useNavigate()

    let userlogged = useRecoilValue(UserLog)


    return <>
        { userlogged ? <HomeComp/> : <><h1>Not Logged in</h1> <button onClick={()=>{navigate("/signin")}} >Sign In</button> </> }
    </>
        
}

export default Home