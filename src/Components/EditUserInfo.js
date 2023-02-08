import DatePicker from "react-date-picker"
// import { collection, getDocs, query, addDoc } from "firebase/firestore"
import { collection, query, getDocs, where, doc  } from "firebase/firestore";
import { Switch } from "evergreen-ui"
import { useEffect, useState } from "react";

import { db } from "../FbStuff/fb";
import { useRecoilValue } from "recoil";
import { UserLogData } from "../States/UserRelated";

let EditUserInfo = ()=>{

    let email = useRecoilValue(UserLogData)

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
    const [checked32, setChecked32] = useState(false)
    const [checked33, setChecked33] = useState(false)
    const [checked34, setChecked34] = useState(false)
    const [checked35, setChecked35] = useState(false)
    const [checked36, setChecked36] = useState(false)
    const [checked37, setChecked37] = useState(false)
    const [checked38, setChecked38] = useState(false)
    const [checked39, setChecked39] = useState(false)
    const [checked390, setChecked390] = useState(false)

    let getuserinfo = async ()=>{
        let g = []

        const q = query(collection(db, "UserInfo"), where("email","==",email.email));
        const q1 = doc(db,"UserInfo",email.email)

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.data()
            setChecked1()
            setChecked11(g[1])
            setChecked12(g[2])
            setChecked13(g[3])
            setChecked14(g[4])
            setChecked15(g[5])
            setChecked16(g[6])
            setChecked17(g[7])
            
        });

        if (g.length!==0) {
            setChecked1(g[0])
            setChecked11(g[1])
            setChecked12(g[2])
            setChecked13(g[3])
            setChecked14(g[4])
            setChecked15(g[5])
            setChecked16(g[6])
            setChecked17(g[7])

            setChecked2(g[8])
            setChecked21(g[9])
            setChecked22(g[10])
            setChecked23(g[11])

            setChecked3(g[12])
            setChecked31(g[13])
            setChecked32(g[14])
            setChecked33(g[15])
            setChecked34(g[16])
            setChecked35(g[17])
            setChecked36(g[18])
            setChecked37(g[19])
            setChecked38(g[20])
            setChecked39(g[21])
            setChecked390(g[22])
        }
        console.log(g)
    }


    

    let save = ()=>{
        getuserinfo()
    }

        

    const [birthDate, onChangeBirth] = useState(new Date());

    return (
        <div className="column">
            <br></br>
            <br></br>
            <div className="horizontalcenter">
                <div className="card4 lightblue pa3 verticalcenter">
                    <input type="text" placeholder="Name" />
                    <br/>
                    <div className="row spacebetween"><h3>Date of birth</h3><DatePicker onChange={onChangeBirth} value={birthDate} /></div>
                    <h1>Health Conditions</h1>
                    <div className="row spacebetween downborder">  <h2>Diabetes</h2> <Switch checked={checked1} onChange={(e)=>{setChecked1(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><h2>Chronic liver disease</h2><Switch checked={checked11} onChange={(e)=>{setChecked11(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><h2>Heart or lung disease</h2><Switch checked={checked12} onChange={(e)=>{setChecked12(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><h2>End-stage renal disease, or on hemodialysis</h2><Switch checked={checked13} onChange={(e)=>{setChecked13(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><h2>Asplenia, complement deficiencies</h2><Switch checked={checked14}  onChange={(e)=>{setChecked14(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><h2>{"Immunocompromised (excluding HIV infection)"}</h2><Switch checked={checked15}  onChange={(e)=>{setChecked15(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><h2>{"HIV infection CD4 percentage and count <15% or <200 mm3"}</h2><Switch checked={checked16}  onChange={(e)=>{setChecked16(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween"><h2>{"HIV infection CD4 percentage and count ≥15% and ≥200 mm3"}</h2><Switch checked={checked17}  onChange={(e)=>{setChecked17(e.target.checked)}} height={24} /></div>
                    <h1>Other</h1>
                    <div className="row spacebetween downborder"><h2>Pregnant</h2><Switch checked={checked2}  onChange={(e)=>{setChecked2(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><h2>Work in healthcare</h2><Switch checked={checked21}  onChange={(e)=>{setChecked21(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween downborder"><h2>Alcoholic</h2><Switch checked={checked22}  onChange={(e)=>{setChecked22(e.target.checked)}} height={24} /></div>
                    <div className="row spacebetween"><h2>Male who have sex with males</h2><Switch checked={checked23}  onChange={(e)=>{setChecked23(e.target.checked)}} height={24} /></div>
                    <h1>Past travel destinations</h1>
                    <div className="flexiblerow">
                        <p>Northern Asia</p>
                        <Switch height={24} checked={checked3}  onChange={(e)=>{setChecked3(e.target.checked)}} />
                        <p>Central Asia</p>
                        <Switch height={24} checked={checked31}  onChange={(e)=>{setChecked31(e.target.checked)}} />
                        <p>South America</p>
                        <Switch height={24} checked={checked32}  onChange={(e)=>{setChecked32(e.target.checked)}} />
                        <p>Western Asia</p>
                        <Switch height={24} checked={checked33}  onChange={(e)=>{setChecked33(e.target.checked)}} />
                        <p>Southern Asia</p>
                        <Switch height={24} checked={checked34}  onChange={(e)=>{setChecked34(e.target.checked)}} />
                        <p>Eastern Asia</p>
                        <Switch height={24} checked={checked35}  onChange={(e)=>{setChecked35(e.target.checked)}} />
                        <p>South Eastern Asia</p>
                        <Switch height={24} checked={checked36}  onChange={(e)=>{setChecked36(e.target.checked)}} />
                        <p>Europe</p>
                        <Switch height={24} checked={checked37}  onChange={(e)=>{setChecked37(e.target.checked)}} />
                        <p>Oceania</p>
                        <Switch height={24} checked={checked38}  onChange={(e)=>{setChecked38(e.target.checked)}} />
                        <p>North America</p>
                        <Switch height={24} checked={checked39}  onChange={(e)=>{setChecked39(e.target.checked)}} />
                        <p>Africa</p>
                        <Switch height={24} checked={checked390}  onChange={(e)=>{setChecked390(e.target.checked)}} />
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