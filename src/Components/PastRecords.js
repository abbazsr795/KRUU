import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../FbStuff/fb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UserLogData } from "../States/UserRelated";

let PastRecords = ()=>{

    let [listofdata, Setusestate] = useState([])
    let navigate = useNavigate()
    let useremail = useRecoilValue(UserLogData)

    let getdata = async ()=>{
        let g = []

        const q = query(collection(db, "Vaccines"), where("email","==",useremail.email));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            let d = doc.data()
            g.push(d)
        });
        Setusestate(g)
    }

    useEffect(()=>{
        getdata()
    },[])

    return(
            <div className="verticalcenter">
                <div className="stack">
                    {
                           listofdata.map(p=>
                            <div className="cardh spacebetween" onClick={()=>{navigate('/editvaccine/'+p.vaccine)}}>
                                <h1 className="bold"> {p.vaccine} </h1>
                            </div>)
                    }
                </div>
                </div>
    )
}

export default PastRecords;