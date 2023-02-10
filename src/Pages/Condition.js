import data from "./MedicalConditions.json"
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../FbStuff/fb";
import { UserLogData } from "../States/UserRelated";
import { useRecoilValue } from "recoil";
import { Alert } from "evergreen-ui";

let Condition = ()=>{
    

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
        <h1 className="massivetext heading1 horizontalcenter">By Conditions</h1>
        <br></br>
        <br></br>
        <div className="horizontalcenter">
            <div className="flexiblerow">
                <Alert intent="warning" title="Please consult your local physician before administrating the next dose" marginBottom={32} > </Alert>
            </div>
        </div>
        <br></br>
        <div className="flexiblerow spacebetween grey">
            <h1 className="boxtext1 lightyellow ultrasmalltext">Recommended vaccination for adults who meet age requirement, lack documentation of vaccination, or lack evidence of past infection</h1>
            <h1 className="boxtext1 lightpurple ultrasmalltext">Recommended vaccination for adults with an additional risk factor or another indication</h1>
            <h1 className="boxtext1 lightcyan ultrasmalltext">Recommended vaccination based on shared clinical decision-making</h1>
            <h1 className="boxtext1 lightgrey ultrasmalltext">No recommendation/Not applicable</h1>
            <h1 className="boxtext1 torange ultrasmalltext">Precaution—vaccination might be indicated if benefit of protection outweighs risk of adverse reaction</h1>
            <h1 className="boxtext1 tred ultrasmalltext">Contraindicated or not recommended—vaccine should not be administered. *Vaccinate after pregnancy.</h1>
        </div>
        <br></br>
        <div className="flexiblerow ">
            {
                data.map(d=>
                <div className="cardfit">
                    <p> {d.Vaccinename} </p>
                    <p >Pregnant </p><p style={{background:d.preg[1], width: "fit-content"}} > {d.preg[0]} </p>
                    <p>Immunocompromised (excluding HIV infection) </p><p style={{background:d.immunocompromised[1], width: "fit-content"}} > {d.immunocompromised[0]} </p>
                    <p>HIV infection CD4 percentage and count ≥15% and ≥200 mm3</p><p style={{background:d.hivcd4countl15p[1], width: "fit-content"}} > {d.hivcd4countl15p[0]} </p>
                    <p>HIV infection CD4 percentage and count &lt; 15% or  &lt; 200 mm3</p><p style={{background:d.hivcd4countg15p[1], width: "fit-content"}} > {d.hivcd4countg15p[0]} </p>
                    <p>Asplenia,complement deficiencies</p><p style={{background:d.asplenia[1], width: "fit-content"}} > {d.asplenia[0]} </p>
                    <p>End-Stage Renal Disease</p><p style={{background:d.endstageRDorhd[1], width: "fit-content"}} > {d.endstageRDorhd[0]} </p>
                    <p>Heart or Lung Disease</p><p style={{background:d.Heartorlungdisease[1], width: "fit-content"}} > {d.Heartorlungdisease[0]} </p>
                    <p>Chonic Liver Disease</p><p style={{background:d.Chronicliverdiease[1], width: "fit-content"}} > {d.Chronicliverdiease[0]} </p>
                    <p>Diabetes</p><p style={{background:d.diabetes[1], width: "fit-content"}} > {d.diabetes[0]} </p>
                    <p>Work in healthcare</p><p style={{background:d.workhealthcare[1], width: "fit-content"}} > {d.workhealthcare[0]} </p>
                    <p>Male who have sex with males</p><p style={{background:d.gay[1], width: "fit-content"}} > {d.gay[0]} </p>
                </div>)
            }
        </div>
    </>

}

export default Condition