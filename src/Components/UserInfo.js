import React from "react";
import { useNavigate } from "react-router-dom";

{/* <div className="horizontalcenter">
            <div className="userinfobox">
                <div className="verticalcenter">
                    <h1>Name</h1>
                    <input className="inputbox" ></input>
                    <h1>DOB</h1>
                    <input className="inputbox" type={"date"}></input>
                    <h1>Health conditions</h1>
                    <div className="flexiblerow maxwidth400px">
                        <button className="button2 grow">Diabetes</button>
                        <button className="button2 grow">Chronic liver disease</button>
                        <button className="button2 grow">Heart or lung disease</button>
                        <button className="button2 grow">End-stage renal disease, or on hemodialysis</button>
                        <button className="button2 grow">Asplenia, complement deficiencies</button>
                        <button className="button2 grow">{"Immunocompromised (excluding HIV infection) "}</button>
                    </div>
                    <h1>Past travel destinations</h1>
                    <h1>Other</h1>
                    <br></br>
                    <br></br>
                   <div className="horizontalcenter">
                        <button className="button1 grow">Save Changes</button>
                   </div>
                   <br></br>
                </div>
            </div>
        </div> */}


const UserInfo = (props) => {

    let navigate = useNavigate()

    return <>
        <div className="has-text-centered">
            <div>
                <h1>Your Details</h1>
                <h3>Email : {props.email} </h3>
                <h3>Date of Birth : {props.DOB} </h3>
            </div>
            <button className="button is-primary is-light" onClick={()=>{navigate('/userinfo/edit')}} >Edit Details</button>
        </div>
    </>
}

export default UserInfo