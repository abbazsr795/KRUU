import './App.css';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import FutureVaccinePage from './Pages/FutureVaccinePage';
import { Routes, Route, useNavigate } from 'react-router-dom'
import NotFound from './Pages/404Page';
import Home from './Pages/HomePage';
import UserInfoPage from './Pages/UserInfoPage'
import VaccinesPage from './Pages/VaccinesPage'
import PastRecordsPage from './Pages/PastRecordsPage';
import EditUserInfo from './Components/EditUserInfo';
import EditPastRecords from './Pages/EditPastRecords';
import AddVaccinePage from './Pages/AddVaccinePage';
import MyVaccines from './Pages/MyVaccines';
import AddVaccinesforIndex from './Pages/AddVaccines.forIndexPage';
import AddNewDose from './Pages/AddNewDose';
import RecommendedVaccinePage from './Pages/RecommendedVaccinePage';
import byCountry from './Components/byCountry';
import MoreData from './Pages/MoreData';
import Editvaccine from './Pages/Editvaccine';
import Countries from './Pages/Countries';
import Age from './Pages/Age';
import Condition from './Pages/Condition';
import { UserLog } from './States/UserRelated';
import { RecoilValue, useRecoilValue } from 'recoil';
import { TSideSheet } from './Components/SideSheet';
import { Underdev } from './Components/underdev';
import { useEffect } from 'react';
import { Feedback } from './Components/Feedback';


// import PastRecords from './Pages/PastRecordsPage';

const App = () => {
  let navigate= useNavigate()
  let userlogbool = useRecoilValue(UserLog)

  useEffect(()=>{
    if (!userlogbool){
      navigate("/")
    }
  },[])

  return<>
    {userlogbool ? <TSideSheet/> : null}
    {/* <TSideSheet/> */}
    <Routes>
      <Route    path='/'                                element={<Home/>}                 />
      <Route    path='/editvaccine/:name'               element={<Editvaccine/>}                 />
      <Route    path='/signin'                          element={<SignInPage/>}           />
      <Route    path='/signup'                          element={<SignUpPage/>}           />
      <Route    path='/mydoses'                         element={<FutureVaccinePage/>}        />
      <Route    path='/moreinfo/:name'                  element={<MoreData/>}        />
      <Route    path='/recommendedvaccine'              element={<RecommendedVaccinePage/>}/>
      <Route    path='/index/edit'                      element={<AddVaccinesforIndex/>}  />
      <Route    path='/vaccines/pastrecords'            element={<PastRecordsPage/>}      />
      <Route    path='/vaccines/pastrecords/edit'       element={<EditPastRecords/>}      />
      <Route    path='/vaccines/addvaccine'             element={<AddVaccinePage/>}       />
      <Route    path='/vaccines/adddose/:name'          element={<AddNewDose/>}           />
      <Route    path='/userinfo'                        element={<UserInfoPage/>}         />
      <Route    path='/userinfo/edit'                   element={<EditUserInfo/>}         />
      <Route    path='/vaccines'                        element={<VaccinesPage/>}         />
      <Route    path='/myvaccines'                      element={<MyVaccines/>}           />
      <Route    path='/byage'                           element={<Age/>}                  />
      <Route    path='/bycondition'                     element={<Condition/>}            />
      <Route    path='/bycountry'                       element={<Countries/>}            /> 
      <Route    path='/bycountry/:name/:reg/:'          element={<Countries/>}            /> 
      <Route    path='*'                                element={<NotFound/> }            />
      <Route    path='/underdev'                        element={<Underdev/>}            />
      <Route    path='/feedback'                        element={<Feedback/>}            />
    </Routes>
  </>
}

export default App;
