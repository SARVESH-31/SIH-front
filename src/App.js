import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/loginform';
import AdminHome from './pages/adminhome';
import LocalHome from './pages/localhome';
import DoctorHome from './pages/doctorhome';
import PharmacyHome from './pages/pharmacyhome';
import HealthRecords from './pages/healthrecords';
import CurrentMedications from './pages/currentmedications';
import CreateTicket from './pages/createticket';
import PharmacyNearMe from './pages/pharmacynearme';
import PatientProfile from './pages/patientprofile';
import SignupForm from './pages/signupform';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login form */}
        <Route path="/" element={<LoginForm />} />
        
        {/* Signup form */}
        <Route path="/signupform" element={<SignupForm />} />

        {/* Admin home */}
        <Route path="/admin" element={<AdminHome />} />

        {/* Patient home */}
        <Route path="/local" element={<LocalHome />} />

        {/* Doctor home */}
        <Route path="/doctor" element={<DoctorHome />} />

        {/* Pharmacy home */}
        <Route path="/pharmacy" element={<PharmacyHome />} />

        {/* Health records */}
        <Route path="/health-records" element={<HealthRecords />} />

        {/* Current medications */}
        <Route path="/current-medication" element={<CurrentMedications />} />

        {/* Create ticket */}
        <Route path="/create-ticket" element={<CreateTicket />} />

        {/* Patient profile */}
        <Route path="/patientprofile" element={<PatientProfile />} />

        {/* Pharmacy near me */}
        <Route path="/pharmacynearme" element={<PharmacyNearMe />} />

        {/* Fallback route for undefined paths (optional) */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
