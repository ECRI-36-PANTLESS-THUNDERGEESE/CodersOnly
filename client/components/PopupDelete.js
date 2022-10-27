const React = require('react');
import '../stylesheets/Profile.css';

const PopupDelete = (props) => {


  return props.trigger ? (
    <div className='delete-popup-container'>
      <div id='popup-inner'>
        <h2>Are you sure you want to delete your account?<br/>This action cannot be undone.</h2>
      </div>
      <div id='popup-butt'>
        <button
          id='submit-delete'
          onClick={() => {
            props.delete();
            props.setTrigger(false);
          }}
        >
          Confirm Delete
        </button>
        <button id='close-btn' onClick={() => props.setTrigger(false)}>
          Cancel
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};

export default PopupDelete;