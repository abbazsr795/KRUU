import DatePicker from "react-date-picker"

import { collection, getDocs, query, addDoc } from "firebase/firestore"

import { useEffect, useState } from "react"

import Select from 'react-select'

import { db } from "../FbStuff/fb"
import { Switch, toaster } from "evergreen-ui"
import { useRecoilValue } from "recoil"
import { UserLogData } from "../States/UserRelated"
import { Alert } from "evergreen-ui"
import { useNavigate } from "react-router-dom"



let AddVaccinePage = ()=>{

    let navigate = useNavigate()

    let [values,setValue] = useState([])
    // let [Bnumber,setBnumber] = useState(0)
    let [selected,setSelected] = useState('')

    let useremail = useRecoilValue(UserLogData)
    
    const [checked,] = useState(true)
    const [Tookdate, ontookdate] = useState(new Date());

    async function GetDropVals(){
        let h = []
        const q = query(collection(db, "Index"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let d = doc.data()
            let g = {
                value:d.name,
                label:d.name
            }
            h.push(g)
  // doc.data() is never undefined for query doc snapshots
        });
        setValue(h)

        // if (value.length !== 0) {
        //     isempty = true
        // }
    }

    let SelectedVal = (selectval)=>{
        setSelected(selectval)
        // alert(selectval.value)
    }

    let add = async ()=>{
        const docref = await addDoc(collection(db,"Vaccines"),{
            email: useremail.email,
            vaccine: selected.label,
            checked: checked,
            tookdate: Tookdate
        })

        if (docref!==""){
            toaster.success('Success')
        }
    }

    useEffect(()=>{
        GetDropVals()  
    },[])
    
    // let BN = [
    //     {value:1, label:1},
    //     {value:2, label:2},
    //     {value:3, label:3},
    //     {value:4, label:4},
    //     {value:5, label:5}
    // ]
      

    return(
    <div className="stack">
        <br/>
        <div className="horizontalcenter">
            <div className="flexiblerow">
                <Alert intent="warning" title="To add a dose" marginBottom={32} > <a onClick={() => navigate('/vaccines/pastrecords')} >Click here</a> </Alert>
            </div>
        </div>
        <div className="horizontalcenter">
            <div className="card4 lightblue pa4" >
                <h1>
                    Add Vaccine
                </h1>
                <h2>Select Vaccine</h2>
                <Select options={values} onChange={SelectedVal} />
                <br/>
                <div className="row spacebetween">
                    {/* <p>When did you take the vaccine</p><DatePicker onChange={ontookdate} value={Tookdate} /> */}
                    
                </div>
                <br/>
                <br/>
                <div className="horizontalcenter"><button onClick={()=>{add()}} className="button is-light is-primary" >Add</button></div>
            </div>
        </div>
    </div>
    )

}

export default AddVaccinePage