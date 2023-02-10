import { useNavigate, useParams } from "react-router-dom"
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../FbStuff/fb";
import { toaster } from "evergreen-ui";

let Editvaccine =()=>{
    let params = useParams()
    let navigate = useNavigate()

    let name = params.name

    let Remove = async (name)=>{

        let result = await deleteDoc(doc(db, "Vaccines", name)).then(toaster.success("Done")).catch((error)=>{toaster.warning("error "+error)})
        alert(result.toString())
    }

    return <>
    <button onClick={()=>{Remove(name)}} >Remove Vaccine?</button>
    <button onClick={()=>{navigate('/vaccines/adddose/'+name)}} >Add dose</button>
    </>

}

export default Editvaccine