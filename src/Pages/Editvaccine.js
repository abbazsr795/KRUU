import { useNavigate, useParams } from "react-router-dom"
import { Button } from "evergreen-ui"

let Editvaccine =()=>{
    let params = useParams()
    let navigate = useNavigate()

    let name = params.name

    let Remove = ()=>{

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
                <Button intent="danger" appearance="primary" className="" onClick={()=>{Remove()}} >Remove Vaccine?</Button>
                <br></br>
                <Button intent="success" onClick={()=>{navigate('/vaccines/adddose/'+name)}} >Add dose</Button>
            </div>
        </div>
    </div>
    </>

}

export default Editvaccine