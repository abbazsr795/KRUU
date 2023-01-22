import React from "react";
import '../index.css'
import 'tachyons'

const SignUp = () => {
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
                        <button className="button1 grow">Sign Up</button>
                   </div>
                   <br></br>
                   <br></br>
                   <a href="https://www.google.com/">Already have an account?</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp