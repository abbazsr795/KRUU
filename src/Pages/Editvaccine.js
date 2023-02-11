import { useNavigate, useParams } from "react-router-dom"
import { Button } from "evergreen-ui"
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
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="horizontalcenter">
            <div className="card21 stack pa3">
                <Button intent="danger" appearance="primary" className="" onClick={()=>{navigate('/underdev')}} >Remove Vaccine?</Button>
                <br></br>
                <Button intent="success" onClick={()=>{navigate('/vaccines/adddose/'+name)}} >Add dose</Button>
            </div>
        </div>
    </div>
    </>

}

export default Editvaccine