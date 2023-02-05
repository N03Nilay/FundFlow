import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignupAndLogIn from './Components/SignupAndLogIn';
import CreateInvestor from './Components/CreateInvestor';
import CreateStartUp from './Components/CreateStartUp';
import LoginStartUp from './Components/LoginStartUp';
import LoginInvestor from './Components/LoginInvestor';

function App() {
  return (
    <>
    <Router>
      
      <Routes>
      <Route path='/' element={<SignupAndLogIn/>} />
      <Route path='/CreateInvestor' element={<CreateInvestor/>} />
      <Route path='/CreateStartUp' element={<CreateStartUp/>} />
      <Route path='/LoginStartUp' element={<LoginStartUp/>} />
      <Route path='/LoginInvestor' element={<LoginInvestor/>} />
      
      </Routes>
    </Router></>
  );
}

export default App;
