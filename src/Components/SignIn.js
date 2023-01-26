import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import React from "react";
import '../index.css'
import 'tachyons'
import { useRecoilState } from "recoil";

const SignIn = () => {

    let [email,setEmail] = useRecoilState("")
    let [password,setPassword] = useRecoilState("")


    let emailSet=(event)=>{
        setEmail(event.target.value)
    }

    let passwordSet=(event)=>{
        setPassword(event.target.value)
    }

    let letsignin = ()=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode+" : "+errorMessage)
        });
    }

    return(
        <div className="horizontalcenter">
            <div className="emailandpasswordbox">
                <div className="verticalcenter">
                    <h1>Email</h1>
                    <input className="inputbox" onChange={emailSet()} />
                    <h1>Password</h1>
                    <input className="inputbox" type={"password"} onChange={passwordSet()} />
                    <br></br>
                    <br></br>
                   <div className="horizontalcenter">
                        <button className="button1 grow">Sign In</button>
                   </div>
                   <br></br>
                   <br></br>
                    {/* <a onClick={SignUp}>Don't have an account?</a> */}
                </div>
            </div>
        </div>
    )
}

export default SignIn