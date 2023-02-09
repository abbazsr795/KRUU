import 'bulma/css/bulma.min.css';

import { getAuth, signOut } from "firebase/auth";
import { toaster } from 'evergreen-ui';
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom"
import { UserLog, UserLogData  } from '../States/UserRelated';

const Footer = () => {
    // let rend = useRecoilValue(RenderComp)
    let navigate = useNavigate()

    let [userlogged, setuserlogged] = useRecoilState(UserLog)
    let user = useRecoilValue(UserLogData)

    const auth = getAuth();
    
    const logout = (auth)=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            toaster.success('Successfully logged out')
            setuserlogged(false)
            navigate('/')
            
        }).catch((error) => {
            // An error happened.
            alert("Not logged out. try again later "+error)
        });
    }

    return(
        <div className='stack'>
            <div className="footer">
                <p><a className="btn76 footerbutton" onClick={()=>{logout(auth)}}><h1 className='f3'>Log Out</h1></a></p> 
                <a className='btn76 footerbutton' onClick={()=>{navigate('/')}}><h1 className='f3'>Home</h1></a>
                <button onClick={()=>{navigate('/index/edit')}} >to Index</button>
                { userlogged ? <h1 className='f3'> {user.email} </h1> : <h1 className='f3'>not logged in</h1> }
            </div>
        </div>
    )
}

export default Footer