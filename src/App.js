import './App.css';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import { Routes, Route } from 'react-router-dom'
import NotFound from './Pages/404Page';
import Home from './Pages/HomePage';
import UserInfoPage from './Pages/UserInfoPage'
import VaccinesPage from './Pages/VaccinesPage'
import PastRecords from './Pages/PastRecordsPage';
import EditUserInfo from './Components/EditUserInfo';
import EditPastRecords from './Pages/EditPastRecords';

// import PastRecords from './Pages/PastRecordsPage';

const App = () => {
  return(
    <Routes>
      <Route path='/'                       element={<Home/>}           />
      <Route path='/signin'                 element={<SignInPage/>}     />
      <Route path='/signup'                 element={<SignUpPage/>}     />
      <Route path='/dashboard'              element={<DashboardPage/>}  />
      <Route path='/pastrecords'            element={<PastRecords/>}    />
      <Route path='/pastrecords/edit'       element={<EditPastRecords/>}    />
      <Route path='/userinfo'               element={<UserInfoPage/>}   />
      <Route path='/userinfo/edit'          element={<EditUserInfo/>}   />
      <Route path='/vaccines'               element={<VaccinesPage/>}   />
      <Route path='*'                       element={<NotFound/> }      />
    </Routes>
  )
}

export default App;
