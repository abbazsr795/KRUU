import { db } from "../FbStuff/fb"

import { Switch, toaster } from "evergreen-ui"
import DatePicker from "react-date-picker"
import { collection, getDocs, query, addDoc } from "firebase/firestore"
import { useEffect, useState } from "react";
import Select from 'react-select'
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserLogData } from "../States/UserRelated";
import { Tooltip, InfoSignIcon } from 'evergreen-ui'

let AddNewDose = ()=>{

    let g = null
    let useremail = useRecoilValue(UserLogData)
    const [Tookdate, ontookdate] = useState(new Date());
    let current = new Date()

    let [past,setpast] = useState(false)
    let [recurring,setreuccing] = useState(false)
    let [recurringnumber,setrreuccingnumber] = useState(0)
    let [selected,setSelected] = useState('')
    let [selecteddays,setSelecteddays] = useState('')

    const [startDate, onChangeStart] = useState(new Date());

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
            recurringnumber: selected,
            recurringdays: g,
            tookdate: Tookdate
        })

        if (docref!==""){
            toaster.success('success')
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
                        <div className="row spacebetween">
                            <div className="row alignitems-center">
                                <p>Recurring?</p>
                                <Tooltip content="How many times will you be taking this dosage">
                                <InfoSignIcon />
                                </Tooltip>
                            </div>
                            <Switch checked={recurring} onChange={(e)=>{setreuccing(e.target.checked)}} height={24} />
                        </div>
                        {recurring ? <><br></br><Select options={BN} onChange={SelectedVal} /><br></br><div className="stack"><p>Next Dose in?</p> <DatePicker onChange={onChangeStart} value={startDate} /></div></> : null}
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