//Component to implement sort function.
import React from 'react';
import '../Styles/sortFunction.css';


//below function gets parameter as onSort when called in app.js and is set to take state values in current render.
//Later it displays the sorted values in neat fashiopn.
function SortFunction({ onSort }) {
  return (
    <div className="sort1">
      <label>Sort by: </label>
      <select onChange={(e) => {
        const [sortKey, setSortKey] = e.target.value.split('-');
        onSort(sortKey, setSortKey);
      }}>
        <option value="email-asc">Email (Asc)</option>
        <option value="email-desc">Email (Desc)</option>
        <option value="name-asc">Name (Asc)</option>
        <option value="name-desc">Name (Desc)</option>
        
      </select>
    </div>
  );
}

export default SortFunction;