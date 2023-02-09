import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { collection, query, where, getDocs } from "firebase/firestore";
// import React from "react";
import { UserLogData } from "../States/UserRelated";
import Select from 'react-select'

import { db } from "../FbStuff/fb";
import { useEffect, useState } from "react";


const FutureVaccinePage = () => {

    let [fdoses, setfdoses] = useState([])

    let getdata = async ()=>{
        let g = []

        const q = query(collection(db, "Dose"));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.data()
            g.push(d)
        });
        setfdoses(g)
    }

    useEffect(()=>{
        getdata()
    },[])

    let navigate = useNavigate()
    let userd = useRecoilValue(UserLogData)

    console.log(fdoses)

    return <div className="stack">
            <h1 className="massivetext heading1 horizontalcenter">Future vaccines</h1>
            <div className="horizontalcenter">
                <div className="flexiblerow">
                    {
                            fdoses.map(p=>
                                <div className="card2 verticalcenter grow" >
                                    <h1>vaccine name {p.vaccine} </h1>
                                    <h2>to be taken on : {p.getdata} </h2>
                                </div>)
                    }
                </div>
            </div>
        </div>
}

export default FutureVaccinePage