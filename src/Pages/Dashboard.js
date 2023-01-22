import React from "react";

const Dashboard = () => {
    return(
        <div className="verticalcenter">
            <div className="userinfo">
                <h1>Name : Abbazs Rahman</h1>
                <h1>Email : abbazs@gmail.com</h1>
                <h1>DOB : 25/06/2004</h1>
                <h1>Age : 18</h1>
            </div>
            <div className="recordsholder">
                <div className="records">
                    <h1>Past vaccine records</h1>
                </div>
                <div className="records">
                    <h1>Upcoming vaccine records</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard