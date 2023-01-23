import React from "react";

const UserInfo = () => {
    return(
        <div className="horizontalcenter">
            <div className="userinfobox">
                <div className="verticalcenter">
                    <h1>Name</h1>
                    <input className="inputbox" ></input>
                    <h1>DOB</h1>
                    <input className="inputbox" type={"date"}></input>
                    <br></br>
                    <br></br>
                   <div className="horizontalcenter">
                        <button className="button1 grow">Save Changes</button>
                   </div>
                   <br></br>
                   <br></br>
                </div>
            </div>
        </div>
    )
}

export default UserInfo