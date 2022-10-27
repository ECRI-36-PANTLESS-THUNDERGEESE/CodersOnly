const React = require('react');
import axios from 'axios';
import '../stylesheets/Profile.css';

const Popup = (props) => {
  //   age,
  //   location,
  //   proglang,
  //   comment,
  //   url,
  console.log(props);
  const updateData = async (data) => {
    try {
      const url = document.getElementById('update-img').value;
      const age = document.getElementById('update-age').value;
      const location = document.getElementById('update-location').value;
      const bio = document.getElementById('update-bio').value;
      const language = document.getElementById('update-lang').value;
      const sendObj = {};
      if (url) {
        sendObj.url = url;
      }
      if (age) {
        sendObj.age = age;
      }
      if (location) {
        sendObj.location = location;
      }
      if (bio) {
        sendObj.comment = bio;
      }
      if (language) {
        sendObj.proglang = language;
      }
      data = Object.assign({}, data, sendObj);
      props.setProfile(data);
      const response = await axios.put(`/api/update/${data.username}`, data);
      //  redux-dispatch props.update(data);
    } catch (error) {
      console.log(error);
    }
  };

  return props.trigger ? (
    <div id='popup'>
      <div id='popup-inner'>
        <div id='detail'>
          <h3>Edit Data</h3>
          <label htmlFor='update-img'>Image URL: </label>
          <input id='update-img'></input>
          <label htmlFor='update-age'>Age:</label>
          <input id='update-age'></input>
          <label htmlFor='update-location'>Location:</label>
          <input id='update-location'></input>
          <label htmlFor='update-bio'>Bio:</label>
          <input id='update-bio'></input>
          <label htmlFor='update-lang'>Programming Language:</label>
          <input id='update-lang'></input>
        </div>
      </div>
      <div id='popup-butt'>
        <button
          id='submit-edit'
          onClick={() => {
            updateData(props.data);
            props.setTrigger(false);
          }}
        >
          Submit
        </button>
        <button id='close-btn' onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Popup;
