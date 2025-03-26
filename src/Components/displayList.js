//My main idea for this component is to display the list items fetched from API.
import React from 'react';
import DisplayUser from './displayUser'; 
import SearchFunction from './searchFunction'; 
import SortFunction from './sortFunction'; 
import '../Styles/displayList.css'; 
//imported all necessary components and styles.

//Inside this display list fucntion , I am calling search and sort components to use. 
// When i get data from api, I will set loader to false and display list using map function or I set message to no users found.
function DisplayList({ users, onSearch, onSort }) {
  return (
    <div className="list">
      <div className="list1">
        <SearchFunction onSearch={onSearch} />
        <SortFunction onSort={onSort} /> 
      </div>
      <div className="list2">
        {users.length > 0 ? (
          users.map((user) => <DisplayUser key={user.id} user={user} />)
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default DisplayList;