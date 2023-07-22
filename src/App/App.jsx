import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Обратите внимание на BrowserRouter

import './App.scss';
import PageMain from '../pages/PageMain/PageMain';
import ModuleOne from '../pages/PageModules/ModuleOne/ModuleOne';

function App() {
  return (
    <Router> {/* Замените на <Router> вместо <> */}
      <Routes>
        <Route exact path="/" element={<PageMain />} /> {/* Используйте element вместо component */}
        <Route path="/ModuleOne" element={<ModuleOne />} /> {/* Используйте element вместо component */}
      </Routes>
    </Router>
  );
}

export default App;
