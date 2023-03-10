import React, { useEffect, useState } from "react";
import { db } from "../FbStuff/fb";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "evergreen-ui";


const VaccinesPage = () => {

    let [listofdata, Setusestate] = useState([])
    let f = []
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
        <div className="stack">
            <h1 className="heading1 pa2 massivetext horizontalcenter">A list of all the vaccines in our database</h1>
            <div className="horizontalcenter">
                <div className="flexiblerow">
                    <Alert intent="warning" title="Refer to CDC for more information" marginBottom={32} > <a href='https://www.cdc.gov/' >Click here</a> </Alert>
                    <Alert intent="warning" title="Refer to NHS for more information" marginBottom={32} > <a href='https://www.nhs.uk/' >Click here</a> </Alert>
                    <Alert intent="warning" title="Refer to Mayo Clinic for more information" marginBottom={32} > <a href='https://www.mayoclinic.org/' >Click here</a> </Alert>
                </div>
            </div>
            <div className="flexiblerow justifycontent-center">
                    {
                        listofdata.map(p=>
                            <div className="card21 verticalcenter grow" onClick={()=>{navigate('/moreinfo/'+p.name)}} >
                                <h1> {p.name} </h1>
                            </div>)
                    }
            </div>
        </div>
    )
}

export default VaccinesPage