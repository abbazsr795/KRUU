import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
// import React from "react";
import Footer from "../Components/Footer";
import { UserLogData } from "../States/UserRelated";
import { Switch } from "evergreen-ui"
import Select from 'react-select'

const RecommendedVaccinePage = () => {

    let navigate = useNavigate()

    return(
        <div>
            <h1 className="horizontalcenter massivetext heading1">Your Vaccines</h1>
            <div className="horizontalcenter flexiblerow spacearound">
                <button className="bigbtn grow" onClick={()=>{navigate('/bycountry')}} ><div className="verticalcenter card1 grow grad3"><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/dotty/512/country.png"/></div><h1 className="midtext">By Country</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{navigate('/bycondition')}} ><div className="verticalcenter card1 grow grad3"><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/ios/512/health-book.png"/></div><h1 className="midtext">By Condition</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{navigate('/byage')}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/material-two-tone/512/age.png"/></div><h1 className="midtext">By Age</h1></div></button>
            </div>
        </div>
    )
}

export default RecommendedVaccinePage