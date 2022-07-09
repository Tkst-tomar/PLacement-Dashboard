import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home/Home"
import LandingPage from './Components/Landing Page/LandingPage';
import SLoginPage from './Components/Dashboards/Student Dashboard/Student Login Page/SLoginPage';
import StudentDashboard from './Components/Dashboards/Student Dashboard/StudentDashboard';
import CompanyLoginPage from './Components/Dashboards/Company Dashboards/Company Login Page/CompanyLoginPage';
import CompanyDashboard from './Components/Dashboards/Company Dashboards/CompanyDashboard';
import Sample from './Sample Component/Sample';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'


function App() {
  return (
    <div className='webpage'>
      <Header />
      <div className="container-fluid pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/landingPage' element={<LandingPage />} />
          <Route path='/studentLogin' element={<SLoginPage />} />
          <Route path='/studentDashboard/*' element={<StudentDashboard />} />
          <Route path='/companyLogin' element={<CompanyLoginPage />} />
          <Route path='/companyDashboard/*' element={<CompanyDashboard />} />
          <Route path='/sample' element={<Sample/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
