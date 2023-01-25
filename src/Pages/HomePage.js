import { useNavigate } from "react-router-dom"
// import { RenderComp } from "../States/Misc"

const Home = ()=>{

    let navigate = useNavigate()



    let toDashboard = () =>{
        navigate('/dashboard')
    }

    let toUserInfo = () =>{
        navigate('/userinfo')
    }



    return <>
        <h1>Home Page</h1>
        <div>
            <button onClick={()=>{toDashboard()}} >Dashboard</button>
            <button onClick={()=>{toUserInfo()}} >User Info</button>
        </div>
    </>
}

export default Home