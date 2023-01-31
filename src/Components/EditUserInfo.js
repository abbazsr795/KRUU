import DatePicker from "react-date-picker"
import { useState } from "react";

let EditUserInfo = ()=>{

    let save = ()=>{

    }

    const [birthDate, onChangeBirth] = useState(new Date());

    return (
        <div className="column">
            <br></br>
            <br></br>
            <div className="horizontalcenter">
                <div className="card4 lightblue pa3 verticalcenter" >
                    <input type="text" placeholder="Name" />
                    <DatePicker onChange={onChangeBirth} value={birthDate} />
                    <br />
                    <br />
                    <button onClick={()=>{save()}} className="button is-primary is-light" >Save Changes</button>
                </div>
            </div>
        </div>
    )

}

export default EditUserInfo