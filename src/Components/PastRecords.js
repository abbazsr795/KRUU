import { collection, query, where, getDocs } from "firebase/firestore";
import { Table } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import { db } from "../FbStuff/fb";
import { useState } from "react";

let PastRecords = ()=>{

    let navigate = useNavigate()

    let [pastrecords,setpastrecords] = useState([])
    let isempty = false
    
    async function get() {
        let h = []
        const q = query(collection(db, "Records"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let d = doc.data()
            let g = {
                name: d.name
            }
            h.push(g)
  // doc.data() is never undefined for query doc snapshots
        });
        setpastrecords(h)

        if (pastrecords.length !== 0) {
            isempty = true
        }

    }


    return <>
        <div className="horizontalcenter flexiblerow spacearound">
            <button onClick={()=>{get()}} ><div className="verticalcenter card1 grow "><div className="horizontalcenter"><img className="img2" src="https://img.icons8.com/cotton/512/record.png"/></div><h1 className="midtext">Get Records</h1></div></button>
            { isempty ? <button onClick={()=>{navigate('/vaccines/pastrecords/edit')}} ><div className="verticalcenter card1 grow"><div className="horizontalcenter"><img className='img2' src="https://img.icons8.com/ios/512/plus-2-math.png"/></div><h1 className="midtext">Add Record</h1></div></button> : null }
            { isempty ? <button onClick={()=>{navigate('/vaccines/pastrecords/edit')}} ><div className="verticalcenter card1 grow"><div className="horizontalcenter"><img className='img2' src="https://img.icons8.com/ios/512/plus-2-math.png"/></div><h1 className="midtext">Add Record</h1></div></button> : null }
            {/* { isempty ? null : <button onClick={()=>{navigate('/pastrecords/edit')}} ><div className="verticalcenter card1 grow"><div className="horizontalcenter"><img className='img2' src="https://img.icons8.com/ios/512/plus-2-math.png"/></div><h1 className="midtext">Add Record</h1></div></button> } */}
            <Table>
                <Table.Head>
                    <Table.TextHeaderCell>Name</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Name</Table.TextHeaderCell>
                    
                </Table.Head>
                <Table.Body height={240}>
                {pastrecords.map((id) => (
                    <Table.Row key={id.name}>
                        <Table.TextCell>{id.name}</Table.TextCell>
                    </Table.Row>
                ))}
                </Table.Body>
            </Table>
        </div>
    </>
}

export default PastRecords