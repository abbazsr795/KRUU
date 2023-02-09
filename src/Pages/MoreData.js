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
    <br></br>
    <br></br>
        <div className="horizontalcenter">
            <div className="card2 pa4">
                <h1> {name} </h1>
                {
                    data.map((item)=> <div>
                        <h2 className="bold">Description</h2>
                        {item.desc}
                        <br></br>
                        <br></br>
                        <h2 className="bold">Side effects</h2>
                        {item.sideeffects}
                        <br></br>
                        <br></br>
                        <h2 className="bold">High risk induvidual</h2>
                        {item.highriskindividuals}
                        <br></br>
                        <br></br>
                        <h2 className="bold">What you have to be careful of</h2>
                        {item.warning}
                    </div> )
                }
            </div>
        </div>
    </>

}

export default MoreData