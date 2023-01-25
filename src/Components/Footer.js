import React from "react";
import { useRecoilValue } from "recoil";
import { RenderComp } from "../States/Misc";
import Back from "./Back";

const Footer = () => {
    

    let rend = useRecoilValue(RenderComp)

    let Backto

    return(
        <div className="footer">
            { rend ? null : <><button>Back</button></> }
            <h3><a className="notextdeco" href="https://www.google.com/">Log Out</a></h3> 
            <h2 className="title">VACCINIC</h2>
            <h3><a className="notextdeco" href="https://www.google.com/">Abbazs Rahman</a></h3> {/*//This button basically brings a new page that allows the user to edit their personal info*/}
        </div>
    )
}

export default Footer