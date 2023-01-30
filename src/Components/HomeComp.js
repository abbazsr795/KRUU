

import { UserLog, UserLogData } from "../States/UserRelated"

import { useNavigate } from "react-router-dom"

import { useRecoilValue } from "recoil"

let HomeComp = ()=>{

    let navigate = useNavigate()

    let usrl = useRecoilValue(UserLog)

    let useremail = useRecoilValue(UserLogData)

    let toDashboard = () => {
        navigate('/dashboard')
    }

    let toUserInfo = () => {
        navigate('/userinfo')
    }
    
    return <>

        <div>
            <h1 className="horizontalcenter massivetext heading1">Welcome back {useremail.email}</h1>
            <div className="horizontalcenter flexiblerow spacearound">
                <button onClick={()=>{toDashboard()}} ><div className="verticalcenter card1 grow grad1"><h1 className="massivetext">🚀</h1><h1 className="midtext">Dashboard</h1></div></button>
                <button onClick={()=>{toUserInfo()}} ><div className="verticalcenter card1 grow grad2"><h1 className="massivetext">📖</h1><h1 className="midtext">User Info</h1></div></button>
                <button onClick={()=>{toUserInfo()}} ><div className="verticalcenter card1 grow grad3"><h1 className="massivetext">💉</h1><h1 className="midtext">All Vaccines</h1></div></button>
            </div>
        </div>

        {/* <h1>Home Page</h1>
        <button onClick={()=>{toDashboard()}} >Dashboard</button>
        <button onClick={()=>{toUserInfo()}} >User Info</button> */}
    </>
}
export default HomeComp