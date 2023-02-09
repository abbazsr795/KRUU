import { useParams } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../FbStuff/fb";
import { useEffect, useState } from "react";

let MoreData = ()=>{

    let [data,setdata] = useState([])

    let params = useParams()
    let name = params.name

    let getdata= async ()=>{
        let g = []

        const q = query(collection(db, "Index"), where("name","==",name));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.data()
            g.push(d)
        });
        setdata(g)
        console.log(data)
    }

    useEffect(()=>{
        getdata()
    },[])

    return <>
        <h1> {name} </h1>
        {
            data.map((item)=> <div>
                {item.desc}
            </div> )
        }
    </>

}

export default MoreData