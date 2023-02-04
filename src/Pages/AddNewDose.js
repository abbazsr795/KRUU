import { db } from "../FbStuff/fb"
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Select from 'react-select'
import { useParams } from "react-router-dom";

let AddNewDose = ()=>{

    let [values, Setusestate] = useState([])

    let params = useParams();
    let nme = params.nme

    let getdata = async ()=>{

        let g = []

        const q = query(collection(db, "Vaccines"));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.data().vaccine
            g.push(d)
            console.log(d)
        });
        Setusestate(g)
        console.log(g)
    }

    useEffect(()=>{

        // nme = params.name
    },[])

    return <div>
        <h1> {nme} </h1>
        <button onClick={()=>{getdata()}} >S</button>
        <Select options={values} onChange={Setusestate} />

    </div>

}

export default AddNewDose