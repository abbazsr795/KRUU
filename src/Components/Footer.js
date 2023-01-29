import 'bulma/css/bulma.min.css';

import { useRecoilValue } from "recoil";
import { RenderComp } from "../States/Misc";
import { useNavigate } from "react-router-dom"

const Footer = () => {


    let rend = useRecoilValue(RenderComp)

    let navigate = useNavigate()

    return(
        <footer className="footer">
            { rend ? null : <><button onClick={()=>{navigate('/')}} >Back</button></> }
            <p><a className="notextdeco" href="https://www.google.com/">Log Out</a></p> 
            <p>VACCINIC</p>
            <h3><a className="notextdeco" href="https://www.google.com/">Abbazs Rahman</a></h3> {/*//This button basically brings a new page that allows the user to edit their personal info*/}
        </footer>
    )
}

export default Footer