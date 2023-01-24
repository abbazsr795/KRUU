import { useNavigate } from "react-router-dom"

const Home = ()=>{

    let navigate = useNavigate()

    let toDashboard = () =>{

    }

    let toUserInfo = () =>{

    }



    return <>
        <h1>
            Home Page
        </h1>
        <div>
            <button onClick={()=>{toDashboard()}} >
                Dashboard
            </button>
            <button onClick={()=>{toUserInfo()}} >
                User Info
            </button>
        </div>
    </>
}

export default Home