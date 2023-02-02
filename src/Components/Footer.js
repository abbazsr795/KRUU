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
        <div className='stack'>
            <div className="footer">
                { rend ? null : <><button onClick={()=>{navigate('/')}} className="button is-light" >Back</button></> }
                <p><a className="notextdeco bold f3" href="https://www.google.com/">Log Out</a></p> 
                <p className='heading5 bold f3'>VACCINIC</p>
                { userlogged ? <h3 className='f3 bold '> {user.email} </h3> : <h3 className='f3 bold '>not logged in</h3> }
            </div>
        </div>
    )
}

export default Footer