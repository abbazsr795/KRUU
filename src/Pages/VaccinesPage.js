import React, { useEffect, useState } from "react";
import { db } from "../FbStuff/fb";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const VaccinesPage = () => {

    let [listofdata, Setusestate] = useState([])
    let navigate = useNavigate()

    let getdata = async ()=>{
        let g = []

        const q = query(collection(db, "Index"));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.data()
            g.push(d)
        });
        Setusestate(g)
    }

    useEffect(()=>{
        getdata()
    },[])

    return(
        <div>
            <h1 className="heading1 pa2 massivetext horizontalcenter">A list of all the vaccines in our database</h1>
            <div className="flexiblerow">
                {
                    listofdata.map(p=>
                        <div className="card2 verticalcenter grow" >
                            <h1> {p.name} </h1>
                            <h2> {p.desc} </h2>
                        </div>)
                }
            </div>
        </div>
    )
}

export default VaccinesPage