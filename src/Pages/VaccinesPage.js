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
        <div>
            <h1 className="heading1 pa2 massivetext horizontalcenter">A list of all the vaccines in our database</h1>
<<<<<<< HEAD
            <div className="horizontalcenter">
                <div className="flexiblerow">
                    <Alert intent="warning" title="Refere to CDC for more information" marginBottom={32} > <a href='https://www.cdc.gov/' >Click here</a> </Alert>
                    <Alert intent="warning" title="Refere to NHS for more information" marginBottom={32} > <a href='https://www.nhs.uk/' >Click here</a> </Alert>
                    <Alert intent="warning" title="Refere to Mayo Clinic for more information" marginBottom={32} > <a href='https://www.mayoclinic.org/' >Click here</a> </Alert>
                </div>
            </div>
            <button onClick={()=>{add()}} >d</button>
=======
>>>>>>> 06b789233e5529082a4230f5e9c96dc4c93624d6
            <div className="flexiblerow">
                {
                    listofdata.map(p=>
                        <div className="card2 verticalcenter grow" onClick={()=>{navigate('/dose/'+p.name)}} >
                            <h1> {p.name} </h1>
                            <h2> {p.desc} </h2>
                        </div>)
                }
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        </div>
    )
}

export default VaccinesPage