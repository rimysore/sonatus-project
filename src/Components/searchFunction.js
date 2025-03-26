//Search component to implement search filter . 
import React, { useState } from 'react';
import '../Styles/searchFunction.css'; 

function SearchFunction({ onSearch }) {
  const [search, setSearch] = useState('');

  const onInput = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };
//above function handlkes the values written in search bar (search state) and value is passed to component which is called in app.js
//Once a value is typed in bar, value is set in bar to display as shown below.

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find name or email..."
        value={search}
        onChange={onInput}
      />
    </div>
  );
}

export default SearchFunction;