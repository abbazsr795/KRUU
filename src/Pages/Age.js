import data from "./MedicalConditions.json"
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../FbStuff/fb";
import { UserLogData } from "../States/UserRelated";
import { useRecoilValue } from "recoil";

let Age = ()=>{

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
    <h1 className="massivetext heading1 horizontalcenter">By Age</h1>
    <br></br>
    <br></br>
    <div className="flexiblerow spacebetween grey">
        <h1 className="boxtext1 lightyellow ultrasmalltext">Recommended vaccination for adults who meet age requirement, lack documentation of vaccination, or lack evidence of past infection</h1>
        <h1 className="boxtext1 lightpurple ultrasmalltext">Recommended vaccination for adults with an additional risk factor or another indication</h1>
        <h1 className="boxtext1 lightcyan ultrasmalltext">Recommended vaccination based on shared clinical decision-making</h1>
        <h1 className="boxtext1 lightgrey ultrasmalltext">No recommendation/Not applicable</h1>
    </div>
    </>

}

export default Age