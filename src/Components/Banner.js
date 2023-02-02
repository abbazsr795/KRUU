import React from "react";
import SignIn from "./SignIn";
import SignUpPage from "../Pages/SignUpPage";

const Banner = () => {
    return(
        <div>
            <div className="horizontalcenter bannertext10">
                <div className="stack">
                    <div className="has-text-centered"><h1 className="bold ultramassivetext roboto">Welcome to <p className="lobster">VACCINIC</p>An all in tool to manage your vaccines</h1></div>
                    <div className="has-text-centered"><h1 className="ultramassivetext bold">↓</h1></div>
                </div>
            </div>
            <h1 className="heading2 horizontalcenter has-text-centered">With Vaccinic you can</h1>
            <div className="flexiblerow spacearound ">
            <div className="card2 grad1 stack pa3">
                <img  src="https://img.icons8.com/plasticine/512/treatment-plan.png"/>
                <h1>Keep track of your past vaccines</h1>
            </div>
            <div className="card2 grad1 stack pa3">
                <img  src="https://img.icons8.com/plasticine/512/new-moon.png"/>
                <h1>Get insights and updates on future vaccines</h1>
            </div>
            <div className="card2 grad1 stack pa3">
                <img src="https://img.icons8.com/plasticine/512/map-marker.png"/>
                <h1>Get vaccine recommendations based on location</h1>
            </div>
            </div>
            <SignUpPage/>
        </div>
    )
}

export default Banner