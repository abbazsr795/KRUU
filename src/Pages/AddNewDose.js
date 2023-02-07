import { db } from "../FbStuff/fb"

import { Switch } from "evergreen-ui"
import DatePicker from "react-date-picker"
import { collection, getDocs, query, addDoc } from "firebase/firestore"
import { useEffect, useState } from "react";
import Select from 'react-select'
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserLogData } from "../States/UserRelated";

let AddNewDose = ()=>{

    let g = null
    let useremail = useRecoilValue(UserLogData)
    const [Tookdate, ontookdate] = useState(new Date());
    let current = new Date()

    let [past,setpast] = useState(false)
    let [recurring,setreuccing] = useState(false)
    let [recurringnumber,setrreuccingnumber] = useState(0)
    let [selected,setSelected] = useState('')

    let params = useParams();
    let nme = params.name

    // if (past!==false) {
    //     ontookdate(new Date())
    // }
    // if (current!==Tookdate){
    //     g = current- Tookdate
    //     // console.log(g)
    //     // alert(g)
    // }

    let addDose = async ()=>{
        const docref = await addDoc(collection(db,"Dose"),{
            email: useremail.email,
            vaccine: nme,
            recurringnumber: recurringnumber,
            recurringdays: g,
            tookdate: Tookdate
        })

        if (docref!==""){
            alert('success') 
            // alert(Tookdate +" "+current +" "+ g+" ")
        }
    }

    let BN = [
        {value:1, label:1},
        {value:2, label:2},
        {value:3, label:3},
        {value:4, label:4},
        {value:5, label:5}
    ]

    let SelectedVal = (selectval)=>{
        setrreuccingnumber(selectval)
        // alert(selectval.value)
    }

    // useEffect(()=>{
    // },[])

    return(
    <div className="stack">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <div className="horizontalcenter">
            <div className="card4 whiteback pa3">
                <div className="horizontalcenter">
                    <div className="stack">
                        <h1>Vaccine {nme} </h1>
                        <div className="row spacebetween">
                            <p>Taken Before?</p>
                            <Switch checked={past} onChange={(e)=>{setpast(e.target.checked)}} height={24} />
                        </div>
                        <br></br>
                        {past ? <><h3>When did you take the vaccine?</h3><DatePicker onChange={ontookdate} value={Tookdate} /><br></br> </> : null }
                        <br></br>
                        <p>Recurring?</p>
                        <Switch checked={recurring} onChange={(e)=>{setreuccing(e.target.checked)}} height={24} />
                        {recurring ? <Select options={BN} onChange={SelectedVal} /> : null}
                        <br></br>
                        <button onClick={()=>{addDose()}} className="button is-primary is-light" >Add Dose</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default AddNewDose