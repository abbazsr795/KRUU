import { useNavigate } from "react-router-dom"
// import { RenderComp } from "../States/Misc"
import { UserLog } from "../States/UserRelated"

import { useRecoilValue } from "recoil"

import HomeComp from "../Components/HomeComp"
import Banner from "../Components/Banner"

function Home() {

    let navigate = useNavigate()

    let userlogged = useRecoilValue(UserLog)


    return <>
        { userlogged ? <HomeComp/> : 
        <>
            <Banner/>
        </> }
    </>
        
}

export default Home