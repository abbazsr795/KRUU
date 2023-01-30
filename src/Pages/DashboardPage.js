import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
// import React from "react";
import Footer from "../Components/Footer";
import { UserLogData } from "../States/UserRelated";

const DashboardPage = () => {

    let navigate = useNavigate()
    let userd = useRecoilValue(UserLogData)

    return(
        <div>
            <h1 className="massivetext heading1 horizontalcenter">Your upcoming vaccines</h1>
            <br></br>
            <div className="futurevaccines ma1">
                <div className="horizontalcenter flexiblerow">
                    <h3>Going to any regions in the future?</h3>
                    <button className="button is-primary is-light" >East Asia</button>
                    <button className="button is-primary is-light" >Europe</button>
                    <button className="button is-primary is-light" >America</button>
                    {/*When clicking the above buttons, the button colour should change and the vaccines listed below should change basedd on the selected country*/}
                </div>
                <div className="verticalcenter">
                    {/*In this place, a list of all upcoming vaccines will come*/}
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Footer/> */}
        </div>
    )
}

export default DashboardPage