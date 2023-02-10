

import { UserLog, UserLogData } from "../States/UserRelated"

import { useNavigate } from "react-router-dom"

import { useRecoilValue } from "recoil"
import { Avatar } from "evergreen-ui"
import { useEffect, useState } from "react"

let HomeComp = ()=>{

    let [usernamebool,setusernamebool] = useState(false)

    let navigate = useNavigate()

    let usrl = useRecoilValue(UserLog)

    let user = useRecoilValue(UserLogData)


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

    let toAddVaccines = () => {
        navigate('/vaccines/addvaccine' )
    }

    useEffect(()=>{
        if (user.username!=="") {
            setusernamebool(false)
        }
    })
    
    return <>

        <div>
            {/* <h1 className="horizontalcenter massivetext heading1">Welcome back {useremail.email}</h1> */}
            <br></br>
            <div className="horizontalcenter">
                <div className="card000 flexiblerow spacebetween">
                    <div className="row gap10">
                        {usernamebool? <Avatar name={user.username} size={100} /> : <Avatar name={user.email} size={100} />}  
                        <div className="stack alignitems-flexstart">
                            <h1 className="ultrasmalltext"> {user.email} </h1>
                            {usernamebool? <h2>user.username</h2> : null}
                            <h3></h3>
                            <button  className="button btn43 is-primary is-light" onClick={()=>{navigate('/userinfo/edit')}} >Edit</button>
                        </div>
                    </div>
                    <div className="alignitems-center"></div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="horizontalcenter flexiblerow spacearound gap20">
            <button className="bigbtn grow" onClick={()=>{toPastRecords()}} ><div className="verticalcenter card1 grow grad3"><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/dotty/512/bureau.png"/></div><h1 className="midtext">Current Vaccines</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{navigate("/futurevaccine")}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/dotty/512/future.png"/></div><h1 className="midtext">My Doses</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{navigate('/recommendedvaccine')}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/512/external-recommend-seo-flatart-icons-solid-flatarticons.png"/></div><h1 className="midtext">Recommended</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{toAddVaccines()}} ><div className="verticalcenter card1 grow"><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/ios/512/plus-2-math.png"/></div><h1 className="midtext">Add Vaccines</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{toUserVaccines()}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img src="https://img.icons8.com/ios/512/list.png" className="img2"/></div><h1 className="midtext">Vaccine Index</h1></div></button>
            </div>
        </div>

        {/* <h1>Home Page</h1>
        <button onClick={()=>{toDashboard()}} >Dashboard</button>
        <button onClick={()=>{toUserInfo()}} >User Info</button> */}
    </>
}
export default HomeComp