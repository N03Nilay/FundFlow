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
import DashboardStartUp from './Components/DashboardStartUp';
import ListOfStartups from './Components/ListOfStartups';
import DashboardInvestor from './Components/DashboardInvestor';
import Biddingpage from './Components/Biddingpage';
import Startupend from './Components/Startupend';
import ProfileStartUp from './Components/ProfileStartUp';
import ProfileStartupShow from './Components/ProfileStartupShow';
import Auction from './Components/Auction';
import Leaderboard from './Components/Leaderboard';
import ProfileMakeChange from './Components/ProfileMakeChange';
import ProfileInvestor from './Components/ProfileInvestor';
import MainPage from './Components/MainPage';
import ProfileShowInvestor from './Components/ProfileShowInvestor';

function App() {
  return (
    <>
    <Router>
      
      <Routes>
      {/* <Route path='/' element={<Startupend/>} /> */}
      <Route path='/' element={<MainPage/>} />
      <Route path='/SignupAndLogIn' element={<SignupAndLogIn/>} />
      <Route path='/CreateInvestor' element={<CreateInvestor/>} />
      <Route path='/CreateStartUp' element={<CreateStartUp/>} />
      <Route path='/LoginStartUp' element={<LoginStartUp/>} />
      <Route path='/LoginInvestor' element={<LoginInvestor/>} />
      <Route path='/DashboardStartUp' element={<DashboardStartUp/>} />
      <Route path='/ListOfStartups' element={<ListOfStartups/>} />
      <Route path='/DashboardInvestor' element={<DashboardInvestor/>} />
      <Route path='/Biddingpage' element={<Biddingpage/>} />
      <Route path='/ProfileStartUp' element={<ProfileStartUp/>} />
      <Route path='/ProfileStartupShow' element={<ProfileStartupShow/>} />
      <Route path='/Auction' element={<Auction/>} />
      <Route path='/Leaderboard' element={<Leaderboard/>} />
      <Route path='/ProfileMakeChange' element={<ProfileMakeChange/>} />
      <Route path='/ProfileInvestor' element={<ProfileInvestor/>} />
      <Route path='/ProfileShowInvestor' element={<ProfileShowInvestor/>} />

      
      </Routes>
    </Router></>
  );
}

export default App;
