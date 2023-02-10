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
    let useremail = useRecoilValue(UserLogData)

    let getdata = async ()=>{
        let g = []

        const q = query(collection(db, "Dose"),where("email","==",useremail.email));

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
            <h1 className="massivetext heading1 horizontalcenter">My Doses</h1>
            <div className="">
                <div className="stack">
                    {
                            fdoses.map(p=>
                                <div className="cardh flexiblerow spacebetween" >
                                    <h1 className="bold">Vaccine name {p.vaccine} </h1>
                                    <h1>To be taken on : {p.getdata} </h1>
                                </div>)
                    }
                </div>
            </div>
        </div>
}

export default FutureVaccinePage