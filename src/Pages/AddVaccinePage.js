import { Select } from "evergreen-ui"
import { collection, getDocs, query } from "firebase/firestore"
import { useState } from "react"
import { db } from "../FbStuff/fb"



let AddVaccinePage = ()=>{

    let [value,setValue] = useState([])
    let isempty = false

    async function GetDropVals(){
        let h = []
        const q = query(collection(db, "Vaccines"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let d = doc.data()
            let g = {
                name: d.name,
                BNumber: d.BNumber
            }
            h.push(g)
  // doc.data() is never undefined for query doc snapshots
        });
        setValue(h)

        if (value.length !== 0) {
            isempty = true
        }
    }

    return <div>
        <Select value={"item1"}  onChange={(event)=>{setValue(event.target.value)}} >
            { value.map((id)=>(
                <option value={id.name}>id.name</option>
            )) }
        </Select>
        <input type="text" />
        <button>Add</button>
    </div>
}

export default AddVaccinePage