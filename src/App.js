//Main component whgre I define functions for all compoennts written.
//After computing all functions and values , I will pass params through functions pass.
import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import DisplayList from './Components/displayList'; 


function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]); 
  const [error, setError] = useState(null);

  // effect hook to fetch data from give api. It will use loader while data is fetched and sets error message when data is failed to fetch.

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch userlist!');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  //function call to manage search operations. checks casesensitive.
  const handleSearch = (search) => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // sorting functio to handle sort based on name, email and ascending and descinding.
  const handleSort = (key, order) => {
    const sorted = [...filteredUsers].sort((a, b) => {
      const valueA = a[key].toLowerCase();
      const valueB = b[key].toLowerCase();
      if (order === 'desc') {
        return valueA < valueB ? 1 : -1;
      } else {
        return valueA > valueB ? 1 : -1;
      }
    });
    setFilteredUsers(sorted);
  };
//setting params to functions call and passing it. Once data is fetched, loading is set false and all functions for search, sort, list is called.
//and data is passed to componnets.
  return (
    <div className="App">
      <h1>Sonatus List </h1>
      {loading && <p>Loading List...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <DisplayList
          users={filteredUsers}
          onSearch={handleSearch}
          onSort={handleSort}
        />
      )}
    </div>
  );
}

export default App;