import logo from './logo.svg';
import './App.css';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import { Routes, Route } from 'react-router-dom'
import UserInfoPage from './Pages/UserInfoPage';
import ErrorPage from './Pages/ErrorPage';

const App = () => {
  return(
    <Routes>
      <Route path='/signin'                      element={<SignInPage/>}      />
      <Route path='/signup'                      element={<SignUpPage/>}      />
      <Route path='/dashboard'                   element={<DashboardPage/>}   />
      <Route path='/userinfo'                    element={<UserInfoPage/>}    />
      <Route path='*'                            element={<ErrorPage/>}       />
    </Routes>
  )
}

export default App;
