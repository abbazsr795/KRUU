

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

    let toPastRecords = () => {
        navigate('/vaccines/pastrecords')
    }

    let toUserInfo = () => {
        navigate('/userinfo')
    }

    let toUserVaccines = () => {
        navigate('/vaccines')
    }

    let toMyVaccines = () => {
        navigate("/myvaccines")
    }
    
    return <>

        <div>
            <h1 className="horizontalcenter massivetext heading1">Welcome back {useremail.email}</h1>
            <div className="horizontalcenter flexiblerow spacearound">
                <button className="bigbtn grow" onClick={()=>{toMyVaccines()}} ><div className="verticalcenter card1 grow grad3"><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/external-justicon-lineal-justicon/512/external-vaccine-science-justicon-lineal-justicon-1.png"/></div><h1 className="midtext">Your vaccines</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{toUserInfo()}} ><div className="verticalcenter card1 grow"><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/ios-glyphs/512/user.png"/></div><h1 className="midtext">User Info</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{toUserVaccines()}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img src="https://img.icons8.com/ios/512/list.png" className="img2"/></div><h1 className="midtext">Vaccine Index</h1></div></button>
            </div>
        </div>

        {/* <h1>Home Page</h1>
        <button onClick={()=>{toDashboard()}} >Dashboard</button>
        <button onClick={()=>{toUserInfo()}} >User Info</button> */}
    </>
}
export default HomeComp