import { UserLogData } from "../States/UserRelated"

import { useNavigate } from "react-router-dom"

import { useRecoilValue } from "recoil"

let buttons = (function1,function2)=>{

    return <>
        <div>
            <button onClick={()=>{function1()}} >Dashboard</button>
            <button onClick={()=>{function2()}} >User Info</button>
        </div>
    </>
}

let HomeComp = ()=>{

    let navigate = useNavigate()

    let usrd

    let toDashboard = () => {
        navigate('/dashboard')
    }

    let toUserInfo = () => {
        navigate('/userinfo')
    }
    
    return <>

        <h1>Home Page</h1>
        {}

    </>
}
export default HomeComp