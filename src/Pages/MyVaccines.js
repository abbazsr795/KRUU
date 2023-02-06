import React from "react";
import { useNavigate } from "react-router-dom";

const MyVaccines = () => {

    let navigate = useNavigate()

    let toDashboard = () => {
        navigate('/dashboard')
    }

    let toPastRecords = () => {
        navigate('/vaccines/pastrecords')
    }

    let toAddVaccines = () => {
        navigate('/vaccines/addvaccine' )
    }

    return(
        <div>
            <h1 className="horizontalcenter massivetext heading1">Your Vaccines</h1>
            <div className="horizontalcenter flexiblerow spacearound">
                <button className="bigbtn grow" onClick={()=>{toPastRecords()}} ><div className="verticalcenter card1 grow grad3"><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/dotty/512/bureau.png"/></div><h1 className="midtext">Past vaccines</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{toDashboard()}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/dotty/512/future.png"/></div><h1 className="midtext">Future vaccines</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{navigate('/recommendedvaccine')}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/512/external-recommend-seo-flatart-icons-solid-flatarticons.png"/></div><h1 className="midtext">Recommended</h1></div></button>
                <button className="bigbtn grow" onClick={()=>{toAddVaccines()}} ><div className="verticalcenter card1 grow"><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/ios/512/plus-2-math.png"/></div><h1 className="midtext">Add Vaccines</h1></div></button>
            </div>
        </div>
    )
}

export default MyVaccines