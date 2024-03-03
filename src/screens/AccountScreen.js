import React, { useState } from 'react';
import './AccountScreen.css';

function AccountsScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="admin-portal">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="scroll-view">
        {/* Here you can map over your data and render it */}
      </div>
    </div>
  );
}

export default AccountsScreen;