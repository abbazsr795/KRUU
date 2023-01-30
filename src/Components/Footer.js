import 'bulma/css/bulma.min.css';

import { useRecoilValue } from "recoil";
import { RenderComp } from "../States/Misc";
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { UserLog, UserLogData  } from '../States/UserRelated';

const Footer = () => {


    let rend = useRecoilValue(RenderComp)

    let navigate = useNavigate()

    let userlogged = useRecoilValue(UserLog)
    let user = useRecoilValue(UserLogData)


    return(
        <footer className="footer">
            { rend ? null : <><button onClick={()=>{navigate('/')}} className="button is-light" >Back</button></> }
            <p><a className="notextdeco" href="https://www.google.com/">Log Out</a></p> 
            <p>VACCINIC</p>
            { userlogged ? <h3> {user.email} </h3> : <h3>not logged in</h3> }
        </footer>
    )
}

export default Footer