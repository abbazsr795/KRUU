import data from "./data3.json"
import { collection, query, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../FbStuff/fb";
import { UserLogData } from "../States/UserRelated";
import { useRecoilValue } from "recoil";


let Age = ()=>{

    // let g = Array.from(data)

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
    <div className="flexiblerow spacebetween grey">
            <h1 className="boxtext1 lightyellow ultrasmalltext">Recommended vaccination for adults who meet age requirement, lack documentation of vaccination, or lack evidence of past infection</h1>
            <h1 className="boxtext1 lightpurple ultrasmalltext">Recommended vaccination for adults with an additional risk factor or another indication</h1>
            <h1 className="boxtext1 lightcyan ultrasmalltext">Recommended vaccination based on shared clinical decision-making</h1>
            <h1 className="boxtext1 lightgrey ultrasmalltext">No recommendation/Not applicable</h1>
            <h1 className="boxtext1 torange ultrasmalltext">Precaution—vaccination might be indicated if benefit of protection outweighs risk of adverse reaction</h1>
            <h1 className="boxtext1 tred ultrasmalltext">Contraindicated or not recommended—vaccine should not be administered. *Vaccinate after pregnancy.</h1>
    </div>

    {/* {
        age.map(g=>
        <div>
            <p>{g}</p>
        </div>)
    } */}

    <br></br>
    <br></br>
        <div className="flexiblerow">
            {
                data.map(t=>
                <div className="cardfit">
                    <h2> {t.VaccineName} </h2>
                    <div className="ma2">
                        <div className="ma2" style={{background:t.Age[2], width: "fit-content"}} >
                            <h3>{t.Age[0]}</h3>
                            <p> {t.Age[1]} </p>
                        </div>
                        <div className="ma2" style={{background:t.Age[5], width: "fit-content"}} >
                            <h3>{t.Age[3]}</h3>
                            <p> {t.Age[4]} </p>
                        </div>
                        <div className="ma2" style={{background:t.Age[8], width: "fit-content"}} >
                            <h3>{t.Age[6]}</h3>
                            <p> {t.Age[7]} </p>
                        </div>
                        <div  className="ma2" style={{background:t.Age[11], width: "fit-content"}} >
                            <h3>{t.Age[9]}</h3>
                            <p> {t.Age[10]} </p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    {/* <div className="flexiblerow spacebetween grey">
        <h1 className="boxtext1 lightyellow ultrasmalltext">Recommended vaccination for adults who meet age requirement, lack documentation of vaccination, or lack evidence of past infection</h1>
        <h1 className="boxtext1 lightpurple ultrasmalltext">Recommended vaccination for adults with an additional risk factor or another indication</h1>
        <h1 className="boxtext1 lightcyan ultrasmalltext">Recommended vaccination based on shared clinical decision-making</h1>
        <h1 className="boxtext1 lightgrey ultrasmalltext">No recommendation/Not applicable</h1>
        <h1 className="boxtext1 torange ultrasmalltext">Precaution—vaccination might be indicated if benefit of protection outweighs risk of adverse reaction</h1>
        <h1 className="boxtext1 tred ultrasmalltext">Contraindicated or not recommended—vaccine should not be administered. *Vaccinate after pregnancy.</h1>
    </div> */}
    </>

}

export default Age