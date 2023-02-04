import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate()

    return(
        <div className="horizontalcenter">
            <div className="header row spacebetween flexiblerow">
                <div className="row centeralign">
                    <img className="logo" src="https://img.icons8.com/external-justicon-lineal-color-justicon/512/external-vaccine-science-justicon-lineal-color-justicon-1.png"/>
                    <h1 className="ariel textsize44">VACCINIC</h1>
                </div>
                <div className="row centeralign gap10">
                    <a onClick={() => navigate('/signup')}><h1 className="ariel textsize44 smalltext btn99 whiteback">Sign Up</h1></a>
                </div>
            </div>
        </div>
    )
}

export default Header