import { useEffect, useState } from "react"
import { db } from "../FbStuff/fb"
import Select from 'react-select'
import { collection, getDocs, query, addDoc } from "firebase/firestore"

let AddVaccinesforIndex = ()=>{

    let values = []


    let [vaccselected,setSelected] = useState('')
    let [vaccname,setVaccName] = useState('')
    let [vaccdesc,setVaccDesc] = useState('')
    let [vaccurl,setVaccurl] = useState('')
    let [vaccregion,setVaccregion] = useState(["Northern Asia","Central Asia","South America","Western Asia", "Southern Asia","Eastern Asia", "South Eastern Asia","Europe","Oceania","Africa","North America"])

    let add = async ()=>{
        const docref = await addDoc(collection(db,"Index"),{
            name: vaccname,
            desc: vaccdesc,
            url:  vaccurl,
            vaccregion: vaccselected
        })

        if (docref!==""){
            alert('success') 
        }
    }


    let SelectedVal = (selectval)=>{
        setSelected(selectval)
        // alert(selectval.value)
    }

    useEffect(()=>{
        for (let i = 0; i < vaccregion.length; i++) {
            values.push({
                value: vaccregion[i],
                label: vaccregion[i]
            })
          }
    },[vaccregion, values])

    return <div>
        <input value={vaccname} onchange={(event)=>{setVaccName(event.target.value)}} />
        <textarea value={vaccdesc} onchange={(event)=>{setVaccDesc(event.target.value)}} />
        <textarea value={vaccurl} onchange={(event)=>{setVaccurl(event.target.value)}} />
        <Select options={values} onChange={SelectedVal()} />
        <button onClick={()=>{add()}} >Add</button>
    </div>

}


export default AddVaccinesforIndex