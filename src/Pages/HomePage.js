import { useNavigate } from "react-router-dom"
import Footer from '../Components/Footer.js'
import SignIn from '../Components/SignIn.js'

const Home = ()=>{

    let navigate = useNavigate()

    let toDashboard = () =>{
        navigate('/dashboard')
    }

    let toUserInfo = () =>{
        navigate('/userinfo')
    }

    return(
        <div>
            <div className = 'home1'>
                <h1 className = 'hometext'>ad 1</h1>
            </div>
            <div className = 'home2'>
                <h1 className = 'hometext'>ad 2</h1>
            </div>
            <div className = 'home3'>
                <h1 className = 'hometext'>ad 3</h1>
            </div>
            <div className = 'horizontalcenter'>
                <h1 className="hometext2">Sign in to get started</h1>
            </div>
            <SignIn/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer/>
        </div>
    )
}

export default Home