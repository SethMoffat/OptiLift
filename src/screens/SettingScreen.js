import React from 'react';

const SettingScreen = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`SettingScreen ${darkMode ? 'dark-mode' : ''}`}>
      <h1>Settings</h1>
      <label>
        Dark Mode:
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </label>
    </div>
  );
};

export default SettingScreen;