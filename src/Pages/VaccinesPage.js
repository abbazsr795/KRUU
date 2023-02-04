import React, { useState } from "react";
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

    return(
        <div>
            <h1 className="heading1 pa2 massivetext horizontalcenter">A list of all the vaccines in our database</h1>
            <button onClick={()=>{getdata()}} >Get Vaccines</button>
            <div className="flexiblerow">
                <div className="card2 verticalcenter grow">
                    <h1>Haemophilus influenzae type b </h1>
                    <h3>Hib can cause severe infections of both the lining of the brain and spinal cord (meningitis) and the bloodstream. Vaccines can prevent Hib disease H Influenza including Hib disease occurs mostly in children younger than 5 years old and adults 65 years or older. People with sickle cell disease, asplenia(no spleen) HIV infection Antibody and complement deficiency syndromes and cancer requiring treatment with chemo, radiation therapy or bone marrow stem call transplant are at a increased risk.</h3>
                </div>
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