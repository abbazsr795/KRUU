import React from "react";

{/* <div className="horizontalcenter">
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
        </div> */}


const UserInfo = (props) => {
    return <>
        <div>
            <div>
                <h1>Your Details</h1>
                <h3>Email : {props.email} </h3>
                <h3>Date of Birth : {props.DOB} </h3>
            </div>
            <button className="button is-light">Edit Details</button>
        </div>
    </>
}

export default UserInfo