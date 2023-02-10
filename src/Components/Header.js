import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "evergreen-ui";

const Header = () => {

    let navigate = useNavigate()

    return(
        <div className="horizontalcenter">
            <br></br>
            <br></br>
            <div className="header row spacebetween">
                <div className="row centeralign">
                    <img className="logo" src="https://img.icons8.com/external-justicon-lineal-color-justicon/512/external-vaccine-science-justicon-lineal-color-justicon-1.png"/>
                    <h1 className="ariel textsize44">VACCINIC</h1>
                </div>
                <div className="row centeralign gap10">
                    <Button onClick={() => navigate('/signin')} className='button is-primary is-light is-large fit' ><div>Log In</div></Button>
                    <Button onClick={() => navigate('/signup')} className='button is-primary is-light is-large fit' ><div>Sign Up</div></Button>
                </div>
            </div>
        </div>
    )
}

export default Header