import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <Routes>
        <Route path="/" element={<HomeScreen darkMode={darkMode} />} exact />
          <Route path="/settings" element={<SettingScreen darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;