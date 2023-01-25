import { useNavigate } from "react-router-dom"


let Back =(URL)=>{

    let navigate = useNavigate()

    navigate(URL)

}

export default Back