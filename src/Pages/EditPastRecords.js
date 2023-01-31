import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";

let EditPastRecords = ()=>{

    const [startDate, setStartDate] = useState(new Date());


    return <div className="has-text-centered" >
        <input type="text" placeholder="Vaccine Name" />
        <textarea name="Details" placeholder="Vaccine Details" id="" cols="30" rows="10"/>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
}

export default EditPastRecords