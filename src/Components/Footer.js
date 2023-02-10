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

    return<>
        {/* <div className='stack'>
            <div className="footer">
                <p><a className="btn76 footerbutton" onClick={()=>{logout(auth)}}><h1 className='f3'>Log Out</h1></a></p> 
                <a className='btn76 footerbutton' onClick={()=>{navigate('/')}}><h1 className='f3'>Home</h1></a>
                <a className='btn76 footerbutton' onClick={()=>{navigate('/index/edit')}} ><h1 className='f3'>To Index</h1></a>
                { userlogged ? <h1 className='f3'> {user.email} </h1> : <h1 className='f3'>not logged in</h1> }
            </div>
        </div> */}
        <div className='flexiblerow footer spacebetween'>
            <a className='notextdeco' onClick={()=>{logout(auth)}}>Log Out</a>
            <a className='notextdeco' onClick={()=>{logout(auth)}}>Home</a>
            <a className='notextdeco' onClick={()=>{logout(auth)}}>Index</a>
            { userlogged ? <p> {user.email} </p> : <p>not logged in</p> }
        </div>
    </>
}

export default Footer