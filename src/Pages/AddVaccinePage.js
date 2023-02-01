import DatePicker from "react-date-picker"

import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"

import Select from 'react-select'

import { db } from "../FbStuff/fb"
import { Switch } from "evergreen-ui"



let AddVaccinePage = ()=>{

    let [values,setValue] = useState([])
    let [Bnumber,setBnumber] = useState(0)
    let [selected,setSelected] = useState('')
    const [Tookdate, ontookdate] = useState(new Date());

    async function GetDropVals(){
        let h = []
        const q = query(collection(db, "Vaccines"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let d = doc.data()
            let g = {
                value:d.Name,
                label:d.Name
            }
            h.push(g)
  // doc.data() is never undefined for query doc snapshots
        });
        setValue(h)
        console.log(h)

        // if (value.length !== 0) {
        //     isempty = true
        // }
    }

    let SelectedVal = (selectval)=>{
        setSelected(selectval)
        // alert(selectval.value)
    }
    let SelectedBN = (selectval)=>{
        setBnumber(selectval)
        // alert(selectval.value)
    }

    let add = ()=>{
        alert(selected.value)

    }

    useEffect(()=>{
        GetDropVals()  
    },[])

    
    let BN = [
        {value:1, label:1},
        {value:2, label:2},
        {value:3, label:3},
        {value:4, label:4},
        {value:5, label:5}
    ]
      

    return <div>
        <h2>Select Vaccine</h2>
        <Select options={values} onChange={SelectedVal} />
        <h2>Seect Bosster Amount</h2>
        <Select options={BN} onChange={SelectedBN} />
        <DatePicker onChange={ontookdate} value={Tookdate} />
        <button onClick={()=>{add()}} >Add</button>
        
    </div>
}

export default AddVaccinePage