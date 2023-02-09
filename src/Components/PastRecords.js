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
            <div className="verticalcenter">
                {
                    listofdata.map(p=>
                        <div className="card2 verticalcenter grow" onClick={()=>{navigate('/vaccines/adddose/'+p.vaccine)}}>
                            <p> {p.vaccine} </p>
                        </div>)
                }
                </div>
    )
}

export default PastRecords;