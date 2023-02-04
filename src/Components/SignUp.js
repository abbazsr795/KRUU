import React from "react";
import '../index.css'
import 'tachyons'
import { useNavigate, Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { UserLogData } from "../States/UserRelated";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserLog } from "../States/UserRelated";
import DatePicker from "react-date-picker"
import { collection, getDocs, query, addDoc } from "firebase/firestore"
import { Switch } from "evergreen-ui"
import { db } from "../FbStuff/fb";

const SignUp = () => {

    let navigate = useNavigate()

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

    const [birthDate, onChangeBirth] = useState(new Date());

    let useremail = useRecoilValue(UserLogData)
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')

    let setuserdata = useSetRecoilState(UserLogData)
    let setUserl = useSetRecoilState(UserLog)

    let emailSet=(event)=>{
        setEmail(event.target.value)
    }

    let passwordSet=(event)=>{
        setPassword(event.target.value)
    }

    let handleuserCreation = async (auth,email, password)=>{

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setuserdata({
                email: user.email,
            })
            setUserl(true)
            // alert(user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorCode+" "+errorMessage)
        });

        const docref = await addDoc(collection(db,"UserInfo"),{
            email: useremail.email,
            dob: birthDate,

            diabetes: checked1,
            cld: checked11,
            hld: checked12,
            endstageRDorhd: checked13,
            asplenia: checked14,
            immunocompromised: checked15,
            hivcd4countl15p: checked16,
            hivcd4countg15p: checked17,

            preg: checked2,
            workhealthcare: checked21,
            alcholic: checked22,
            gay: checked23,

            nasia: checked3,
            namerica: checked31
        })

        if (docref!==""){
            alert('success') 
            navigate('/')
        }

    } 

    return <>
        <h1 className="horizontalcenter heading2">Sign Up</h1>
        <div className="horizontalcenter">
            <div className="">
                <div className="card4 lightblue pa3 verticalcenter">
                    <h1>Email</h1>
                    <input className="inputbox" onChange={emailSet} />
                    <h1>Password</h1>
                    <input className="inputbox" type={"password"} onChange={passwordSet} />
                    {/* <h1>Name</h1>
                    <input className="inputbox" onChange={passwordSet} /> */}
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
                        <Switch height={24} checked={checked3} onChange={(e)=>{setChecked3(e.target.value)}} />
                        <p>Central Asia</p>
                        <Switch height={24} />
                        <p>South America</p>
                        <Switch height={24} />
                        <p>Western Asia</p>
                        <Switch height={24} />
                        <p>Southern Asia</p>
                        <Switch height={24} />
                        <p>Eastern Asia</p>
                        <Switch height={24} />
                        <p>South Eastern Asia</p>
                        <Switch height={24} />
                        <p>Europe</p>
                        <Switch height={24} />
                        <p>Oceania</p>
                        <Switch height={24} />
                        <p>North America</p>
                        <Switch height={24} />
                        <p>Africa</p>
                        <Switch height={24} />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                   <div className="horizontalcenter">
                        <button className="button1 grow" onClick={()=>{ handleuserCreation(getAuth(), email, password) }} >Sign Up</button>
                   </div>
                   <br></br>
                   <br></br>
                   <div className="horizontalcenter"><Link to='/signin' >Already have an account?</Link></div>
                </div>
            </div>
        </div>
    </>
}

export default SignUp