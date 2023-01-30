import { useNavigate } from "react-router-dom"
// import { RenderComp } from "../States/Misc"
import { UserLog } from "../States/UserRelated"

import { useRecoilValue } from "recoil"

import HomeComp from "../Components/HomeComp"

function Home() {

    let navigate = useNavigate()

    let userlogged = useRecoilValue(UserLog)


    return <>
        { userlogged ? <HomeComp/> : <div className="has-text-centered" ><h1>Not Logged in</h1> <button onClick={()=>{navigate("/signin")}} >Sign In</button><button onClick={()=>{navigate("/signup")}} >Sign Up</button> </div> }
    </>
        
}

export default Home