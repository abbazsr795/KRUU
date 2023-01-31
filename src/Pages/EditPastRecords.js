
import { useState } from "react";
import DatePicker from "react-date-picker";


let EditPastRecords = ()=>{

    let AddVaccine = ()=>{

    }

    const [startDate, onChangeStart] = useState(new Date());
    const [endDate, onChangeEnd] = useState(new Date());


    return <div className="has-text-centered" >
        <input type="text" placeholder="Vaccine Name" />
        <textarea name="Details" placeholder="Vaccine Details" id="" cols="30" rows="10"/>
        <DatePicker onChange={onChangeStart} value={startDate} />
        <br />
        <br />
        <DatePicker onChange={onChangeEnd} value={endDate} />
        <br />
        <br />
        <br />
        <button onClick={()=>{AddVaccine()}} >Add Vaccine</button>
    </div>
}

export default EditPastRecords