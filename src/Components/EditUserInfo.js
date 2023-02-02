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
                    <div className="flexiblerow">
                        <Switch/>
                        <button className="button4" >Diabetes</button>
                        <button className="button4" >Chronic liver disease</button>
                        <button className="button4" >Heart or lung disease</button>
                        <button className="button4" >End-stage renal disease, or on hemodialysis</button>
                        <button className="button4" >Asplenia, complement deficiencies</button>
                        <button className="button4" >{"Immunocompromised (excluding HIV infection)"}</button>
                        <button className="button4" >{"HIV infection CD4 percentage and count <15% or <200 mm3"}</button>
                        <button className="button4" >{"HIV infection CD4 percentage and count ≥15% and ≥200 mm3"}</button>
                    </div>
                    <h1>Other</h1>
                    <div className="flexiblerow">
                        <button className="button4" >Pregnant</button>
                        <button className="button4" >Work in healthcare</button>
                        <button className="button4" >Alcoholic</button>
                        <button className="button4" >Male who have sex with males</button>
                    </div>
                    <h1>Past travel destinations</h1>
                    <div className="flexiblerow">
                        <button className="button4" >South Asia</button>
                    </div>
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