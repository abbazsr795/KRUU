import React from "react";
import '../index.css'
import 'tachyons'
import { useNavigate, Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { UserLogData } from "../States/UserRelated";
import { useSetRecoilState } from "recoil";

const SignUp = () => {

    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    let [,setuserdata] = useSetRecoilState(UserLogData)


    let emailSet=(event)=>{
        setEmail(event.target.value)
    }

    let passwordSet=(event)=>{
        setPassword(event.target.value)
    }

    let handleuserCreation = (auth,email, password)=>{

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // setuserdata({
            //     email: user.email
            // })
            alert(user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorCode+" "+errorMessage)
        });



    }

    return <>
        <div className="horizontalcenter">
            <div className="emailandpasswordbox">
                <div className="verticalcenter">
                    <h1>Email</h1>
                    <input className="inputbox" onChange={emailSet} />
                    <h1>Password</h1>
                    <input className="inputbox" type={"password"} onChange={passwordSet} />
                    <br></br>
                    <br></br>
                   <div className="horizontalcenter">
                        <button className="button1 grow" onClick={()=>{ handleuserCreation(getAuth(), email, password) }} >Sign Up</button>
                   </div>
                   <br></br>
                   <br></br>
                   <Link to='/signin' >Don't have an account?</Link>
                </div>
            </div>
        </div>
    </>
}

export default SignUp