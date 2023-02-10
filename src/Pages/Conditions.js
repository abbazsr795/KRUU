import data from "./MedicalConditions.json"
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../FbStuff/fb";
import { UserLogData } from "../States/UserRelated";
import { useRecoilValue } from "recoil";

let Conditions = ()=>{

    let [listofdata, Setusestate] = useState()
    let useremail = useRecoilValue(UserLogData)

    let [config,setconfig] = useState(false)

//     let getdata = async ()=>{
//         const q = query(collection(db, "UserInfo"), where("email","==",useremail.email));

//         const querySnapshot = await getDocs(q);
//             querySnapshot.forEach((doc) => {
//             let d = doc.data()
//             Setusestate(d)
//         });
//         console.log(listofdata)
//    }

   useEffect(()=>{
    // getdata()
    // if (config!=="undefined"){
    //     setconfig(false)
    // }
   },[])

    return <>
        {
            data.map(d=><div>
                <p> {d.Vaccinename} </p>
                <p> {d.preg} </p>
                <p> {d.immunocompromised} </p>
                <p> {d.hivcd4countl15p} </p>
                <p> {d.hivcd4countg15p} </p>
                <p> {d.asplenia} </p>
                <p> {d.endstageRDorhd} </p>
                <p> {d.Heartorlungdisease} </p>
                <p> {d.Chronicliverdiease} </p>
                <p> {d.diabetes} </p>
                <p> {d.workhealthcare} </p>
                <p> {d.gay} </p>
            </div>)
        }
    </>

}

export default Conditions