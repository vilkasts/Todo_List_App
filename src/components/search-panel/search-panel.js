import React, { useState } from 'react';
import '../search-panel/search-panel.css';

const SearchPanel = ( {onSearchChange} ) => {

const [termState, setTermState] = useState('');

const onSearchChange1 = (e) => {
    const termState = e.target.value;
    setTermState(termState);
    onSearchChange(termState);
}

        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   value={ termState }
                   onChange={ onSearchChange1 } />
        );
    }

export default SearchPanel;
