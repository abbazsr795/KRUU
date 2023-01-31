import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../FbStuff/fb";

let PastRecords = ()=>{

    let navigate = useNavigate()

    let pastrecords = []
    let isempty = false
    
    async function get() {
        const q = query(collection(db, "Records"), where("vaccines","==","taken"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            pastrecords.push(doc.data())
  // doc.data() is never undefined for query doc snapshots
        });

        if (pastrecords.length !== 0) {
            isempty = true
        }
    }


    return <>
        <div className="horizontalcenter flexiblerow spacearound">
            <button onClick={()=>{get()}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/cotton/512/record.png"/></div><h1 className="midtext">Get Records</h1></div></button>
            { isempty ? null : <button onClick={()=>{navigate('/pastrecords/edit')}} ><div className="verticalcenter card1 grow"><div className="horizontalcenter"><img className='img2' src="https://img.icons8.com/ios/512/plus-2-math.png"/></div><h1 className="midtext">Add Record</h1></div></button> }
        </div>
    </>
}

export default PastRecords