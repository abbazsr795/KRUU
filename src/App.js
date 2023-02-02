import './App.css';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import { Routes, Route } from 'react-router-dom'
import NotFound from './Pages/404Page';
import Home from './Pages/HomePage';
import UserInfoPage from './Pages/UserInfoPage'
import VaccinesPage from './Pages/VaccinesPage'
import PastRecordsPage from './Pages/PastRecordsPage';
import EditUserInfo from './Components/EditUserInfo';
import EditPastRecords from './Pages/EditPastRecords';
import AddVaccinePage from './Pages/AddVaccinePage';
import MyVaccines from './Pages/MyVaccines';

// import PastRecords from './Pages/PastRecordsPage';

const App = () => {
  return(
    <Routes>
      <Route    path='/'                                element={<Home/>}             />
      <Route    path='/signin'                          element={<SignInPage/>}       />
      <Route    path='/signup'                          element={<SignUpPage/>}       />
      <Route    path='/dashboard'                       element={<DashboardPage/>}    />
      
      <Route    path='/vaccines/pastrecords'            element={<PastRecordsPage/>}  />
      <Route    path='/vaccines/pastrecords/edit'       element={<EditPastRecords/>}  />
      <Route    path='/vaccines/add'                    element={<AddVaccinePage/>}   />
      <Route    path='/userinfo'                        element={<UserInfoPage/>}     />
      <Route    path='/userinfo/edit'                   element={<EditUserInfo/>}     />
      <Route    path='/vaccines'                        element={<VaccinesPage/>}     />
      <Route    path='/myvaccines'                      element={<MyVaccines/>}       />
      <Route    path='*'                                element={<NotFound/> }        />
    </Routes>
  )
}

export default App;
