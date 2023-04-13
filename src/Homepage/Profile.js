import React from 'react';
// import './Profile.css';

function Profile(props) {
  return (
    <div className="profile">
      <img src={props.picture} alt="Profile Picture" className="profile-pic" />
      <div className="labels">
        <label htmlFor="name">{props.name}</label>
        <label htmlFor="email">{props.regno}</label>
      </div>
    </div>
  );
}

export default Profile;