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
            <div className="dashboarduserinfo">
                <div className="horizontalcenter"><h1 className="massivetext">Your upcoming vaccines</h1></div>
            </div>
            <div className="futurevaccines">
                <div className="horizontalcenter flexiblerow">
                    <h3>Going to any regions in the future?</h3>
                    <button>East Asia</button>
                    <button>Europe</button>
                    <button>America</button>
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
            <Footer/>
        </div>
    )
}

export default DashboardPage