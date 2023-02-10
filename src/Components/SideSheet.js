import React from 'react'
import ReactDOM from 'react-dom'
import { SideSheet, Pane, Heading, Card, Button } from 'evergreen-ui'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import { toaster } from 'evergreen-ui';
import { useRecoilState, useRecoilValue } from "recoil";
import { UserLog, UserLogData  } from '../States/UserRelated';


export function TSideSheet() {

  const auth = getAuth();

  let [userlogged, setuserlogged] = useRecoilState(UserLog)
  let user = useRecoilValue(UserLogData)
    
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

    let navigate = useNavigate()
    
    const [isShown, setIsShown] = React.useState(false)
  
    return (
      <React.Fragment>
        <SideSheet
        position='left'
        width={300}
          isShown={isShown}
          onCloseComplete={() => setIsShown(false)}
          containerProps={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column'
          }}
        >
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16}>
              <Heading size={600}>
                <div className='row'>
                    <img className='icon3' src='https://img.icons8.com/external-justicon-lineal-color-justicon/512/external-vaccine-science-justicon-lineal-color-justicon-1.png'/>
                    <h1>VACCINIC</h1>
                </div>
              </Heading>
            </Pane>
          </Pane>
          <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
            <a onClick={() => {navigate("/")}}><h1>Home</h1></a>
            <a onClick={() => {navigate('/vaccines')}}><h1>Vaccine Index</h1></a>
            <a onClick={() => {navigate("/futurevaccine")}}><h1>My Doses</h1></a>
            <a onClick={() => {navigate('/recommendedvaccine')}}><h1>Recommended Vaccines</h1></a>
            <a onClick={() => {navigate('/vaccines/pastrecords')}}><h1>Current Vaccines</h1></a>
            <a onClick={() => {navigate('/vaccines/addvaccine')}}><h1>Add Vaccines</h1></a>
          </Pane>
          <Pane position='bottom'  padding={16}>
          <a onClick={()=>{logout(auth)}}><h1>Log Out</h1></a>
          { userlogged ? <p className='f3'> {user.email} </p> : <p className='f3'>not logged in</p> }
          </Pane>
        </SideSheet>
        <Button onClick={() => setIsShown(true)}><img className='icon' src='https://img.icons8.com/ios-filled/512/stripped-patterns.png'/></Button>
      </React.Fragment>
    )
  }
