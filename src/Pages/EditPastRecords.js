import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import DatePicker from "react-date-picker";
import HeadRoom from "../Components/HeadRoom";
import { db } from "../FbStuff/fb";

let EditPastRecords = ()=>{

    const [,setvaccineName] = useState('')
    const [,setvaccineDesc] = useState('')
    const [startDate, onChangeStart] = useState(new Date());
    const [endDate, onChangeEnd] = useState(new Date());

    async function AddVaccine(){
        const docref = await addDoc(collection(db,"Records"),{

            InjectDate: startDate,
            EndDate: endDate
        })

    }

    
    let changename = (event)=>{
        setvaccineName(event.target.value)
    }
    let changedesc = (event)=>{
        setvaccineDesc(event.target.value)
    }


    return( 
        <div className="horizontalcenter">
            <div className="" >
                <HeadRoom/>
                <HeadRoom/>
                <HeadRoom/>
                <div className="card4 verticalcenter lightblue pa3">
                    <input type="text" placeholder="Vaccine Name" onchange={changename} />
                    <br />
                    <textarea className="descbox" name="Details" placeholder="Vaccine Details" id="" onchange={changedesc}/>
                    <br />
                    <br />
                    <DatePicker onChange={onChangeStart} value={startDate} />
                    <br/>
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