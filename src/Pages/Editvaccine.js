import { useNavigate, useParams } from "react-router-dom"

let Editvaccine =()=>{
    let params = useParams()
    let navigate = useNavigate()

    let name = params.name

    let Remove = ()=>{

    }

    return <>
    <button onClick={()=>{Remove()}} >Remove Vaccine?</button>
    <button onClick={()=>{navigate('/vaccines/adddose/'+name)}} >Add dose</button>
    </>

}

export default Editvaccine