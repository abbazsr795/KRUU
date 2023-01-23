import React from "react";

const DashboardPage = () => {
    return(
        <div className="verticalcenter">
            <div className="slotsholder">
                <div className="userinfo grow">
                    <h1>Name : Abbazs Rahman</h1>
                    <h1>Email : abbazs@gmail.com</h1>
                    <h1>DOB : 25/06/2004</h1>
                    <h1>Age : 18</h1>
                </div>
                <div className="featuredstuff grow">
                    <h1>Featured events</h1>
                </div>
            </div>
            <div className="slotsholder">
                <div className="records">
                    <h1>Past vaccine records</h1>
                    <button className="button2 grow">+</button>
                </div>
                <div className="records">
                    <h1>Upcoming vaccine records</h1>
                    <button className="button2 grow">+</button>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default DashboardPage