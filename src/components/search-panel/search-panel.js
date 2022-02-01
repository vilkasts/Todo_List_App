import React, { useState } from 'react';
import './search-panel.css';

function SearchPanel({ onSearchChange }) {
  const [termState, setTermState] = useState('');

  const onSearchChange1 = (e) => {
    const targetTermState = e.target.value;
    setTermState(targetTermState);
    onSearchChange(targetTermState);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={termState}
      onChange={onSearchChange1}
    />
  );
}

export default SearchPanel;
