import { useNavigate, useParams } from "react-router-dom"
import { Button } from "evergreen-ui"
import { doc, deleteDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../FbStuff/fb";
import { toaster } from "evergreen-ui";

let Editvaccine =()=>{
    let params = useParams()
    let navigate = useNavigate()

    let name = params.name

    let Remove = async (name)=>{
        let g = ''

        const q = query(collection(db, "Vaccines"),where("vaccine","==",name));

        const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            let d = doc.id
            g=d
        });

        toaster.notify(g)

        let result = await deleteDoc(doc(db, "Vaccines", g))
        .then(
            toaster.success("Done"),navigate('/vaccines/pastrecords')).catch((error)=>{toaster.warning("error "+error)})
        // toaster.warning(result)
    }

    return <>
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="horizontalcenter">
            <div className="card21 stack pa3">
                <Button intent="danger" appearance="primary" className="" onClick={()=>{Remove(name)}} >Remove Vaccine</Button>
                <br></br>
                <Button intent="success" onClick={()=>{navigate('/vaccines/adddose/'+name)}} >Add dose</Button>
            </div>
        </div>
    </div>
    </>

}

export default Editvaccine