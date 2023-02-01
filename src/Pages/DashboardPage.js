import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
// import React from "react";
import Footer from "../Components/Footer";
import { UserLogData } from "../States/UserRelated";

const DashboardPage = () => {

    let navigate = useNavigate()
    let userd = useRecoilValue(UserLogData)

    return(
        <div>
            <h1 className="massivetext heading1 horizontalcenter">Future vaccines</h1>
        </div>
    )
}

export default DashboardPage