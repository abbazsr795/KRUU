import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../FbStuff/fb";

let Records = ()=>{

    let pastrecords = []
    let isempty = false
    
    async function add() {
        const q = query(collection(db, "Records"), where("vaccine","==","taken"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {

            pastrecords.push(doc.data())
  // doc.data() is never undefined for query doc snapshots
        });

        if (pastrecords.length === 0) {
            isempty = true
        }
    }


    return <>
        <button onClick={()=>{add()}} >Get Records</button>
        { isempty ? <></> : <></> }
    </>
}

export default Records