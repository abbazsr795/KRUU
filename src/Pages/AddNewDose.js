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

    let params = useParams();
    let nme = params.name

    let addDose = async ()=>{
        if (past!==false) {
            ontookdate(new Date())
        }
        if (current!==Tookdate){
            g = Tookdate - current
            alert(g)
        }
        const docref = await addDoc(collection(db,"Dose"),{
            email: useremail.email,
            vaccine: nme,
            recurringnumber: recurringnumber,
            recurringdays: g,
            tookdate: Tookdate
        })

        if (docref!==""){
            // alert('success') 
            alert(Tookdate +" "+current +" "+ g+" ")
        }
    }

    useEffect(()=>{
    },[])

    return <div>
        <h1>Vaccine {nme} </h1>
        <p>Taken Before?</p>
        <Switch checked={past}  onChange={(e)=>{setpast(e.target.checked)}} height={24} />
        {past ? <DatePicker onChange={ontookdate} value={Tookdate} /> : null }

        <button onClick={()=>{addDose()}} >Add Dose</button>
    </div>

}

export default AddNewDose