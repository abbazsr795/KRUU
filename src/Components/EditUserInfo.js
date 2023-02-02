import DatePicker from "react-date-picker"
import { Switch } from "evergreen-ui"
import { useState } from "react";

let EditUserInfo = ()=>{

    let save = ()=>{

    }

    const [birthDate, onChangeBirth] = useState(new Date());

    return (
        <div className="column">
            <br></br>
            <br></br>
            <div className="horizontalcenter">
                <div className="card4 lightblue pa3 verticalcenter" >
                    <input type="text" placeholder="Name" />
                    <DatePicker onChange={onChangeBirth} value={birthDate} />
                    <br></br>
                    <h1>Health Conditions</h1>
                    <div className="row spacebetween downborder"><h2>Diabetes</h2></div>
                    <div className="row spacebetween downborder"><h2>Chronic liver disease</h2></div>
                    <div className="row spacebetween downborder"><h2>Heart or lung disease</h2></div>
                    <div className="row spacebetween downborder"><h2>End-stage renal disease, or on hemodialysis</h2></div>
                    <div className="row spacebetween downborder"><h2>Asplenia, complement deficiencies</h2></div>
                    <div className="row spacebetween downborder"><h2>{"Immunocompromised (excluding HIV infection)"}</h2></div>
                    <div className="row spacebetween downborder"><h2>{"HIV infection CD4 percentage and count <15% or <200 mm3"}</h2></div>
                    <div className="row spacebetween"><h2>{"HIV infection CD4 percentage and count ≥15% and ≥200 mm3"}</h2></div>
                    <h1>Other</h1>
                    <div className="row spacebetween downborder"><h2>Pregnant</h2></div>
                    <div className="row spacebetween downborder"><h2>Work in healthcare</h2></div>
                    <div className="row spacebetween downborder"><h2>Alcoholic</h2></div>
                    <div className="row spacebetween"><h2>Male who have sex with males</h2></div>
                    <h1>Past travel destinations</h1>
                    <div className="row spacebetween downborder"><h2>South East Asia</h2></div>
                    <div className="row spacebetween"><h2>North America</h2></div>
                    <br></br>
                    <button onClick={()=>{save()}} className="button is-primary is-light" >Save Changes</button>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )

}

export default EditUserInfo