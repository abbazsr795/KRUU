import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../FbStuff/fb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let PastRecords = ()=>{

    let [listofdata, Setusestate] = useState([])
    let navigate = useNavigate()

    let getdata = async ()=>{
        let g = []

        const q = query(collection(db, "Records"));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.data()
            g.push(d)
        });
        Setusestate(g)
    }
    return(
            <div className="verticalcenter">
                <div className="horizontalcenter"><button className="button1 grow" onClick={()=>{getdata()}} >Get Data</button></div>
                {
                    listofdata.map(p=>
                        <div className="card2 verticalcenter grow" onClick={()=>{navigate('/vaccines/adddose/'+p.name)}}>
                            <h1> {p.name} </h1>
                            <h2> {p.description} </h2>
                        </div>)
                }
                </div>
    )
}

export default PastRecords;