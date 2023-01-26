import { UserLogData } from "../States/UserRelated"

import { useNavigate } from "react-router-dom"

import { useRecoilValue } from "recoil"

let HomeComp = ()=>{

    let navigate = useNavigate()

    let toDashboard = () => {
        navigate('/dashboard')
    }

    let toUserInfo = () => {
        navigate('/userinfo')
    }
    
    return <>

        <h1>Home Page</h1>
        <div>
            <button onClick={()=>{toDashboard()}} >Dashboard</button>
            <button onClick={()=>{toUserInfo()}} >User Info</button>
        </div>

    </>
}
export default HomeComp