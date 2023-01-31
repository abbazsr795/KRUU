import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../FbStuff/fb";

let Records = ()=>{

    let navigate = useNavigate()

    let pastrecords = []
    let isempty = false
    
    async function get() {
        const q = query(collection(db, "Records"), where("vaccine","==","taken"));

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
        <button onClick={()=>{get()}} className="has-text-centered" >Get Records</button>
        { isempty ? null : <div className="has-text-centered" ><button onClick={()=>{navigate('/pastrecords/edit')}} >Add Vaccine Info</button></div> }
    </>
}

export default Records