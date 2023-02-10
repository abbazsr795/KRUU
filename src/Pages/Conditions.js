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
                <p>Pregnant </p><p style={{color:d.preg[1]}} > {d.preg[0]} </p>
                <p>Immunocompromised (excluding HIV infection) </p><p> style={{color:d.immunocompromised[1]}} > {d.immunocompromised[0]} </p>
                <p>HIV infection CD4 percentage and count ≥15% and ≥200 mm3</p><p style={{color:d.hivcd4countl15p[1]}} > {d.hivcd4countl15p[0]} </p>
                <p>HIV infection CD4 percentage and count &lt; 15% or  &lt; 200 mm3</p><p style={{color:d.hivcd4countg15p[1]}} > {d.hivcd4countg15p[0]} </p>
                <p>Asplenia,complement deficiencies</p><p style={{color:d.asplenia[1]}} > {d.asplenia[0]} </p>
                <p>End-Stage Renal Disease</p><p style={{color:d.endstageRDorhd[1]}} > {d.endstageRDorhd[0]} </p>
                <p>Heart or Lung Disease</p><p style={{color:d.Heartorlungdisease[1]}} > {d.Heartorlungdisease[0]} </p>
                <p>Chonic Liver Disease</p><p style={{color:d.Chronicliverdiease[1]}} > {d.Chronicliverdiease[0]} </p>
                <p>Diabetes</p><p style={{color:d.diabetes[1]}} > {d.diabetes[0]} </p>
                <p>Work in healthcare</p><p style={{color:d.workhealthcare[1]}} > {d.workhealthcare[0]} </p>
                <p>Male who have sex with males</p><p style={{color:d.gay[1]}} > {d.gay[0]} </p>
            </div>)
        }
    <h1 className="massivetext heading1 horizontalcenter">By Conditions</h1>
    <br></br>
    <br></br>
    <div className="flexiblerow spacebetween grey">
        <h1 className="boxtext1 lightyellow ultrasmalltext">Recommended vaccination for adults who meet age requirement, lack documentation of vaccination, or lack evidence of past infection</h1>
        <h1 className="boxtext1 lightpurple ultrasmalltext">Recommended vaccination for adults with an additional risk factor or another indication</h1>
        <h1 className="boxtext1 lightcyan ultrasmalltext">Recommended vaccination based on shared clinical decision-making</h1>
        <h1 className="boxtext1 lightgrey ultrasmalltext">No recommendation/Not applicable</h1>
        <h1 className="boxtext1 torange ultrasmalltext">Precaution—vaccination might be indicated if benefit of protection outweighs risk of adverse reaction</h1>
        <h1 className="boxtext1 tred ultrasmalltext">Contraindicated or not recommended—vaccine should not be administered. *Vaccinate after pregnancy.</h1>
    </div>
    </>

}

export default Conditions