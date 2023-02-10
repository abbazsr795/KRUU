import React from "react";
import { useNavigate } from "react-router-dom";

const MyVaccines = () => {

    let navigate = useNavigate()

    let toDashboard = () => {
        navigate('/futurevaccine')
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
                
            </div>
        </div>
    )
}

export default MyVaccines