import DatePicker from "react-date-picker"
import { useState } from "react";

let EditUserInfo = ()=>{

    let save = ()=>{

    }

    const [birthDate, onChangeBirth] = useState(new Date());

    return <div className="has-text-centered" >
        <input type="text" placeholder="Name" />
        <DatePicker onChange={onChangeBirth} value={birthDate} />
        <br />
        <br />
        <br />
        <br />
        <button onClick={()=>{save()}} className="button is-primary is-light" >Save Changes</button>
    </div>

}

export default EditUserInfo