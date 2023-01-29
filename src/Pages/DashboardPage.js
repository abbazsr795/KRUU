import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
// import React from "react";
import Footer from "../Components/Footer";
import { UserLogData } from "../States/UserRelated";

const DashboardPage = () => {

    let navigate = useNavigate()
    let userd = useRecoilValue(UserLogData)

    return(
        <div className="verticalcenter">
            <div className="slotsholder">
                <div className="userinfo grow">
                    <h1>Name : {userd.email} </h1>
                    {/* <h1>Email : abbazs@gmail.com</h1> */}
                    {/* <h1>DOB : 25/06/2004</h1> */}
                    {/* <h1>Age : 18</h1> */}
                </div>
                <div className="featuredstuff grow">
                    <h1>Featured events</h1>
                </div>
            </div>
            <div className="slotsholder">
                <div className="records">
                    <h1>Past vaccine records</h1>
                    <button className="button2 grow" onClick={()=>{navigate('/dashboard/pastrecords')}} >See More</button>
                </div>
                <div className="records">
                    <h1>Upcoming vaccine records</h1>
                    <button className="button2 grow" onClick={()=>{navigate("/dashboard/upcoming")}} >+</button>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </div>
    )
}

export default DashboardPage