import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Обратите внимание на BrowserRouter

import './App.scss';
import PageMain from '../pages/PageMain/PageMain';
import ModuleOne from '../pages/PageModules/ModuleOne/ModuleOne';
import LogIn from '../pages/pageLogIn/Login';
import AdminPanel from '../pages/AdminPanel/AdminPanel';

function App() {
  return (
    <Router> {/* Замените на <Router> вместо <> */}
      <Routes>
        <Route exact path="/" element={<PageMain />} /> 
        <Route path="/ModuleOne" element={<ModuleOne />} /> 
        <Route path="/LogIn" element={<LogIn />} /> 
        <Route path="/AdminPanel" element={<AdminPanel/>} />
      </Routes>
    </Router>
  );
}

export default App;
