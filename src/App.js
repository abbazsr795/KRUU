import logo from './logo.svg';
import './App.css';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import DashboardPage from './Pages/DashboardPage';
import { Routes, Route } from 'react-router-dom'
import UserInfoPage from './Pages/UserInfoPage';
import NotFound from './Pages/404Page';
import Home from './Pages/HomePage';

const App = () => {
  return(
    <Routes>
      <Route path='/'           element={<Home/>}          />
      <Route path='/signin'     element={<SignInPage/>}    />
      <Route path='/signup'     element={<SignUpPage/>}    />
      <Route path='/dashboard'  element={<DashboardPage/>} />
      <Route path='/userinfo'   element={<UserInfoPage/>}  />
      <Route path='*'           element={<NotFound/> }     />
    </Routes>
  )
}

export default App;
