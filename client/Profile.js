import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import './stylesheets/Profile.css';
import Popup from './components/popup';

//need to fetch our profile data from the database to fill in our profile
const Profile = (props) => {
  //deconstructed props object
  const [profileData, setProfileData] = useState({
    username: null,
    age: null,
    location: null,
    comment: null,
    proglang: null,
  });

  const [loginStatus, setLoginStatus] = useState(false);

  const logOutHandler = () => {
    setLoginStatus(true);
    props.setCurrUser(false);
    fetch(`/api/${props.currUser}`, {
      method: 'DELETE',
    }).then((data) => {
      window.location.reload();
    });
  };

  useEffect(() => {
    fetch(`/api/${props.currUser}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setProfileData(data);
      });
  }, []);

  console.log(profileData);

  const { username, age, location, comment, proglang, url } = profileData;
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      {loginStatus && <Navigate to='/' />}
      <Popup
        trigger={buttonPopup}
        data={profileData}
        // REDUX - update dispatch update={props.updateTrans}
        setTrigger={setButtonPopup}
        setProfile={setProfileData}
      ></Popup>
      <Navbar currUser={props.currUser} setCurrUser={props.setCurrUser} />
      <div className='profilePage'>
        <div className='profileContainer'>
          <div className='username'>
            <div id='btn'>
              <button className='logOutBtn' onClick={logOutHandler}>
                Log Out
              </button>
              <button id='update-btn' onClick={() => setButtonPopup(true)}>
                Update
              </button>
            </div>
            <h1>{username}</h1>
          </div>
          <img className='profileImage' src={url} alt='profileImage' />
          <p className='userDetail'>Age: {age}</p>
          <p className='userDetail'>Location: {location}</p>
          <p className='userDetail'>Bio: {comment}</p>
          <p className='userDetail'>Programming Language: {proglang}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
