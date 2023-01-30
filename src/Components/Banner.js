import React from "react";
import SignIn from "./SignIn";
import SignUpPage from "../Pages/SignUpPage";

const Banner = () => {
    return(
        <div>
            <h1 className="massivetext heading1 horizontalcenter"> Welcome to Vaccinic</h1>
            <div className = "stack pa4">
                <div className="stack">
                    <div className="row">
                        <h1 className="bold ultramassivetext">Vaccinic is an all in one vaccine management tool</h1>
                        <img src="https://img.icons8.com/plasticine/512/clinic.png"/>
                    </div>
                    <div className="row">
                        <img src="https://img.icons8.com/plasticine/512/syringe.png"/>
                        <h1 className="bold ultramassivetext">Currently Vaccinic has over 15 different vaccines</h1>
                    </div>
                    <h1 className="heading2 horizontalcenter">With Vaccinic you can</h1>
                    <div className="flexiblerow spacearound">
                        <div className="card2 grad1 stack pa3">
                            <img src="https://img.icons8.com/plasticine/512/treatment-plan.png"/>
                            <h1>Keepp track of your past vaccines</h1>
                        </div>
                        <div className="card2 grad1 stack pa3">
                            <img src="https://img.icons8.com/plasticine/512/new-moon.png"/>
                            <h1>Get insights and updates on future vaccines</h1>
                        </div>
                        <div className="card2 grad1 stack pa3">
                            <img src="https://img.icons8.com/plasticine/512/map-marker.png"/>
                            <h1>Get vaccine recommendations based on location</h1>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <SignUpPage/>
        </div>
    )
}

export default Banner