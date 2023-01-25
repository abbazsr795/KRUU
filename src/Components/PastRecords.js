import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../FbStuff/fb";

let Records = ()=>{
    
    async function add() {
        const q = query(collection(db, "Records"), where("vaccine","==","taken"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
    }


    return <>
        <button onClick={()=>{add()}} >Get Records</button>
    </>
}

export default Records