import DatePicker from "react-date-picker"
import { collection, getDocs, query, addDoc } from "firebase/firestore"
import { Switch } from "evergreen-ui"
import { useState } from "react";

let EditUserInfo = ()=>{

    const [checked1, setChecked1]   = useState(false)
    const [checked11, setChecked11] = useState(false)
    const [checked12, setChecked12] = useState(false)
    const [checked13, setChecked13] = useState(false)
    const [checked14, setChecked14] = useState(false)
    const [checked15, setChecked15] = useState(false)
    const [checked16, setChecked16] = useState(false)
    const [checked17, setChecked17] = useState(false)

    const [checked2, setChecked2]   = useState(false)
    const [checked21, setChecked21] = useState(false)
    const [checked22, setChecked22] = useState(false)
    const [checked23, setChecked23] = useState(false)

    const [checked3, setChecked3]   = useState(false)
    const [checked31, setChecked31] = useState(false)

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
                    <div className="row spacebetween downborder">  <h2>Diabetes</h2> <Switch checked={checked1} onChange={(e)=>{setChecked1(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><Switch checked={checked11} onChange={(e)=>{setChecked11(e.target.checked)}} height={24} /><h2>Chronic liver disease</h2></div>
                    <div className="row spacebetween downborder"><Switch checked={checked12} onChange={(e)=>{setChecked12(e.target.checked)}} height={24} /><h2>Heart or lung disease</h2></div>
                    <div className="row spacebetween downborder"><Switch checked={checked13} onChange={(e)=>{setChecked13(e.target.checked)}} height={24} /><h2>End-stage renal disease, or on hemodialysis</h2></div>
                    <div className="row spacebetween downborder"><Switch checked={checked14}  onChange={(e)=>{setChecked14(e.target.checked)}} height={24} /><h2>Asplenia, complement deficiencies</h2></div>
                    <div className="row spacebetween downborder"><Switch checked={checked15}  onChange={(e)=>{setChecked15(e.target.checked)}} height={24} /><h2>{"Immunocompromised (excluding HIV infection)"}</h2></div>
                    <div className="row spacebetween downborder"><Switch checked={checked16}  onChange={(e)=>{setChecked16(e.target.checked)}} height={24} /><h2>{"HIV infection CD4 percentage and count <15% or <200 mm3"}</h2></div>
                    <div className="row spacebetween">           <Switch checked={checked17}  onChange={(e)=>{setChecked17(e.target.checked)}} height={24} /><h2>{"HIV infection CD4 percentage and count ≥15% and ≥200 mm3"}</h2></div>
                    <h1>Other</h1>
                    <div className="row spacebetween downborder"><Switch checked={checked2}  onChange={(e)=>{setChecked2(e.target.checked)}} height={24} /><h2>Pregnant</h2></div>
                    <div className="row spacebetween downborder"><Switch checked={checked21}  onChange={(e)=>{setChecked21(e.target.checked)}} height={24} /><h2>Work in healthcare</h2></div>
                    <div className="row spacebetween downborder"><Switch checked={checked22}  onChange={(e)=>{setChecked22(e.target.checked)}} height={24} /><h2>Alcoholic</h2></div>
                    <div className="row spacebetween"><Switch checked={checked23}  onChange={(e)=>{setChecked23(e.target.checked)}} height={24} /><h2>Male who have sex with males</h2></div>
                    <h1>Past travel destinations</h1>
                    <div className="row spacebetween downborder"><Switch checked={checked3}  onChange={(e)=>{setChecked3(e.target.checked)}} height={24} /><h2>South East Asia</h2></div>
                    <div className="row spacebetween"><Switch checked={checked31}  onChange={(e)=>{setChecked31(e.target.checked)}} height={24} /><h2>North America</h2></div>
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