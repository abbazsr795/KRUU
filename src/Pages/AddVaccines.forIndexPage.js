import { useState } from "react"

let AddVaccinesforIndex = ()=>{

    let [vaccname,setVaccName] = useState('')
    let [vaccdesc,setVaccDesc] = useState('')

    return <div>
        <input value={vaccname} onchange={(event)=>{setVaccName(event.target.value)}} />
        <textarea value={vaccdesc} onchange={(event)=>{setVaccDesc(event.target.value)}} />

    </div>

}


export default AddVaccinesforIndex