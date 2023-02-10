import React from "react";
import SignIn from "./SignIn";
import SignUpPage from "../Pages/SignUpPage";
import Header from "./Header";

const Banner = () => {
    return(
        <div>
            <Header/>
            <br></br>
            <div className="horizontalcenter ">
                <div className="stack">
                    <div className="has-text-centered"><h1 className="bold ultramassivetext roboto">Welcome to <p className="lobster">VACCINIC</p>An all in one tool to manage your vaccines</h1></div>
                </div>
            </div>
            <h1 className="heading2 horizontalcenter has-text-centered">With Vaccinic you can</h1>
            <div className="flexiblerow spacearound pa0">
            <div className="card21 grad1 stack pa3 grow">
                <img  src="https://img.icons8.com/external-icongeek26-outline-icongeek26/512/external-Record-music-icongeek26-outline-icongeek26.png"/>
                <div className="horizontalcenter"><h1>Keep track of your past vaccines</h1></div>
            </div>
            <div className="card21 grad1 stack pa3 grow">
                <img  src="https://img.icons8.com/ios-filled/512/customer-insights-manager.png"/>
                <div className="horizontalcenter"><h1>Get insights and updates on future vaccines</h1></div>
            </div>
            <div className="card21 grad1 stack pa3 grow">
                <img src="https://img.icons8.com/ios-glyphs/512/map-marker.png"/>
                <div className="horizontalcenter"><h1>Get vaccine recommendations based on location</h1></div>
            </div>
            </div>
        </div>
    )
}

export default Banner