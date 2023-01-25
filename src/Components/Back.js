import { useNavigate } from "react-router-dom"


let Back =(url)=>{

    let navigate = useNavigate()

    navigate(url)

}

export default Back