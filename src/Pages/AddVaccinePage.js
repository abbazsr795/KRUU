import { Select } from "evergreen-ui"
import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../FbStuff/fb"



let AddVaccinePage = ()=>{

    let [values,setValue] = useState([])
    let [g, setG] = useState('')
    let [Bnumber,setBnumber] = useState()

    async function GetDropVals(){
        let h = []
        const q = query(collection(db, "Vaccines"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let d = doc.data()
            let g = d.Name
            h.push(g)
  // doc.data() is never undefined for query doc snapshots
        });
        setValue(h)
        console.log(h)

        // if (value.length !== 0) {
        //     isempty = true
        // }
    }

    let add = ()=>{
        alert(Bnumber)

    }

    useEffect(()=>{
        GetDropVals()  
    },[])

    return <div>
        
        <Select onChange={(event)=>{setValue(event.target.value)}} >
            { values.map((id)=>(
                <option value={id}>{id}</option>
            )) }

        </Select>
        <input type="text" onChange={(event)=>{setBnumber(event.target.value)}} />
        <button onClick={()=>{add()}} >Add</button>
    </div>
}

export default AddVaccinePage