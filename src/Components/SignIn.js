import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";

import React from "react";
import '../index.css'
import 'tachyons'
import { useSetRecoilState } from "recoil";
import { UserLog, UserLogData } from "../States/UserRelated";
import { toaster } from "evergreen-ui";

const SignIn = () => {

    let navigate = useNavigate()

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let setUserd = useSetRecoilState(UserLogData)
    let setUserl = useSetRecoilState(UserLog)

    let emailSet=(event)=>{
        setEmail(event.target.value)
    }

    let passwordSet=(event)=>{
        setPassword(event.target.value)
    }

    let letsignin = (auth,email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            setUserd({
                email: user.email
            })
            setUserl(true)
            toaster.notify('Logged in as :'+user.email)
            navigate('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toaster.danger('Error  | '+errorCode+" : "+errorMessage)
        });
    }

    return <>
            <h1 className="horizontalcenter heading2">Sign In</h1>
            <div className="horizontalcenter">
                <div className="emailandpasswordbox">
                    <div>
                        <h1>Email</h1>
                        <input className="inputbox" onChange={emailSet} />
                        <h1>Password</h1>
                        <input className="inputbox" type={"password"} onChange={passwordSet} />
                        <br></br>
                        <br></br>
                    <div className="horizontalcenter">
                            <button className="button1 grow" onClick={()=>{letsignin(getAuth(),email,password)}} >Sign In</button>
                    </div>
                    <br></br>
                    <br></br>
                        <Link to='/signup' >Don't have an account?</Link>
                    </div>
                </div>
            </div>
        </>
}

export default SignIn