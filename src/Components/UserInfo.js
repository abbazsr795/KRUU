import React from "react";
import { useNavigate } from "react-router-dom";
import HeadRoom from "./HeadRoom";


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