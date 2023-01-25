import { doc, getDoc } from "firebase/firestore";

let Records = ()=>{
    
    async function add() {
        const q = query(collection(db, "cities"), where("capital", "==", true));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        }
    }


    return <>
        <button onClick={()=>{add()}} >Get Records</button>
    </>
}

export default Records