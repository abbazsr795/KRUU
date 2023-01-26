import React from "react";
import '../index.css'
import 'tachyons'
import { useNavigate } from "react-router-dom"

const SignIn = () => {

    let navigate = useNavigate()
    
    let toSignUp = () => {
        navigate("/signup")
    }

    return(
        <div className="horizontalcenter">
            <div className="emailandpasswordbox">
                <div className="verticalcenter">
                    <h1>Email</h1>
                    <input className="inputbox" ></input>
                    <h1>Password</h1>
                    <input className="inputbox" type={"password"}></input>
                    <br></br>
                    <br></br>
                   <div className="horizontalcenter">
                        <button className="button1 grow">Sign In</button>
                   </div>
                   <br></br>
                   <br></br>
                    <a onClick={toSignUp}>Don't have an account?</a>
                </div>
            </div>
        </div>
    )
}

export default SignIn