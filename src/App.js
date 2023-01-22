import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn.js'
import SignUp from './Components/SignUp.js'
import Footer from './Components/Footer.js'
import HeadRoom from './Components/HeadRoom';
import Dashboard from './Pages/Dashboard';

const App = () => {
  return(
    <div>
      <HeadRoom/>
      <Dashboard/>
      <Footer/>
    </div>
  )
}

export default App;
