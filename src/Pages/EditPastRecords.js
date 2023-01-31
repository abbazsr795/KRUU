
import { useState } from "react";
import DatePicker from "react-date-picker";
import HeadRoom from "../Components/HeadRoom";


let EditPastRecords = ()=>{

    let AddVaccine = ()=>{

    }

    const [startDate, onChangeStart] = useState(new Date());
    const [endDate, onChangeEnd] = useState(new Date());


    return( 
        <div className="horizontalcenter">
            <div className="" >
                <HeadRoom/>
                <HeadRoom/>
                <HeadRoom/>
                <div className="card4 verticalcenter lightblue pa3">
                    <input type="text" placeholder="Vaccine Name" />
                    <br></br>
                    <textarea className="descbox" name="Details" placeholder="Vaccine Details" id=""/>
                    <br />
                    <br />
                    <DatePicker onChange={onChangeStart} value={startDate} />
                    <br></br>
                    <DatePicker onChange={onChangeEnd} value={endDate} />
                    <br />
                    <br />
                    <br />
                    <div className="horizontalcenter"><button onClick={()=>{AddVaccine()}} >Add Vaccine</button></div>
                </div>
            </div>
        </div>
    )
}

export default EditPastRecords