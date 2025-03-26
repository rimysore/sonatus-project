//This component is used to create cards for displaying of users data fetched from api.
import React, { useState } from 'react';
import '../Styles/displayUser.css'; 

//This function displayuser uses a state to maintain card and is set to name and email once data is fetched.
//After that when user clicks on name which is hover and he will se other details like address, phone,company.

function DisplayUser({ user }) {
  const [newCard, setNewCard] = useState(false);

  return (
    <div className="card">
      <h3 onClick={() => setNewCard(!newCard)} className="card1">
        {user.name}
      </h3>
      <p>Email: {user.email}</p>
      {newCard && (
        <div className="card2">
          <p>Address: {user.address.street}, {user.address.city}</p>
          <p>Phone: {user.phone}</p>
          <p>Company: {user.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default DisplayUser;