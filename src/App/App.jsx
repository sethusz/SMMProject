import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Обратите внимание на BrowserRouter

import './App.scss';
import PageMain from '../pages/PageMain/PageMain';

import LogIn from '../pages/pageLogIn/Login';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import ModuleOne from '../pages/PageModules/ModuleOne/ModuleOne';
import ModuleTwo from '../pages/PageModules/ModuleTwo/ModuleTwo';
import ModuleThree from '../pages/PageModules/ModuleThree/ModuleThree';
import ModuleFour from '../pages/PageModules/ModuleFour/ModuleFour';
import ModuleFive from '../pages/PageModules/ModuleFive/ModuleFive';
import ModuleSix from '../pages/PageModules/ModuleSix/ModuleSix';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PageMain />} />
        <Route path="/AdminPanel" element={<AdminPanel />} />
        <Route path="/ModuleOne" element={<ModuleOne />} />
        <Route path="/ModuleTwo" element={<ModuleTwo />} />
        <Route path="/ModuleThree" element={<ModuleThree />} />
        <Route path="/ModuleFour" element={<ModuleFour />} />
        <Route path="/ModuleFive" element={<ModuleFive />} />
        <Route path="/ModuleSix" element={<ModuleSix />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App;
