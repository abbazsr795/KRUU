import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../FbStuff/fb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let PastRecords = ()=>{

    let [listofdata, Setusestate] = useState([])
    let navigate = useNavigate()

    let getdata = async ()=>{
        let g = []

        const q = query(collection(db, "Vaccines"));

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
                <button onClick={()=>{getdata()}} className={"button is-primary is-light"} >Get Data</button>
                    {/*In this place, a list of all upcoming vaccines will come*/}
                {
                    listofdata.map(p=>
                        <div className="card2 verticalcenter grow" onClick={()=>{navigate('/vaccines/adddose/'+p.name)}}>

                        </div>)
                }
                </div>
    )
}

export default PastRecords;