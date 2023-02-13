import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { collection, query, where, getDocs } from "firebase/firestore";
// import React from "react";
import { UserLogData } from "../States/UserRelated";
import Select from 'react-select'

import { db } from "../FbStuff/fb";
import { useEffect, useState } from "react";
import moment from "moment/moment";


const FutureVaccinePage = () => {

    let [fdoses, setfdoses] = useState([])
    let useremail = useRecoilValue(UserLogData)

    let colours = ["green","orange","red"]

    let getdata = async ()=>{
        let g = []

        const q = query(collection(db, "Dose"),where("email","==",useremail.email));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.data()
            let f = {
                email: d.email,
                recurringdays: d.recurringdays,
                recurringnumber:d.recurringnumber,
                tookdate: moment(d.tookdate.toDate()).calendar(),
                vaccine: d.vaccine
            }
            g.push(f)
        });
        setfdoses(g)
    }

    useEffect(()=>{
        getdata()
    },[])

    let navigate = useNavigate()
    let userd = useRecoilValue(UserLogData)

    return <div className="stack">
            <h1 className="massivetext heading1 horizontalcenter">My Doses</h1>
            <div className="">
                <div className="stack">
                    {
                            fdoses.map(p=>
                                <div className="cardh flexiblerow spacebetween" >
                                    <h1 className="bold">Vaccine name {p.vaccine} </h1>
                                    <h3>{p.tookdate} </h3>
                                </div>)
                    }
                </div>
            </div>
        </div>
}

export default FutureVaccinePage