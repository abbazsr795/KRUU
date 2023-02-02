import React from "react";
import SignIn from "./SignIn";
import SignUpPage from "../Pages/SignUpPage";

const Banner = () => {
    return(
        <div>
            {/* <div className = "stack pa4">
                <div className="stack">
                    <div className="flexiblerow">
                        <h1 className="bold ultramassivetext bannertext1">Vaccinic is an all in one vaccine management tool</h1>
                        <img className="bannerimage" src="https://img.icons8.com/plasticine/512/clinic.png"/>
                    </div>
                    <div className="flexiblerow banner2 ">
                        <img className="bannerimage" src="https://img.icons8.com/plasticine/512/syringe.png"/>
                        <h1 className="bold ultramassivetext bannertext1">Currently Vaccinic has over 15 different vaccines</h1>
                    </div>
                    <h1 className="heading2 horizontalcenter">With Vaccinic you can</h1>
                    <div className="flexiblerow spacearound ">
                        <div className="card2 grad1 stack pa3">
                            <img  src="https://img.icons8.com/plasticine/512/treatment-plan.png"/>
                            <h1>Keepp track of your past vaccines</h1>
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
                </div>
            </div>
            <SignUpPage/> */}
            <div className="horizontalcenter bannertext10">
                <div className="stack">
                    <br/>
                    <br/>
                    <br/>
                    <div className="has-text-centered"><h1 className="ultramassivetext roboto">One place to manage all your vaccines</h1></div>
                    <br/>
                    <div className="has-text-centered"><h1 className="ultramassivetext">↓</h1></div>
                    <br/>
                    <br/>
                </div>
            </div>
            <h1 className="heading2 horizontalcenter">With Vaccinic you can</h1>
            <div className="flexiblerow spacearound ">
            <div className="card2 grad1 stack pa3">
                <img  src="https://img.icons8.com/plasticine/512/treatment-plan.png"/>
                <h1>Keepp track of your past vaccines</h1>
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