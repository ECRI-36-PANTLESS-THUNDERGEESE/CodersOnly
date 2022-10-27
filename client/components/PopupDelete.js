const React = require('react');
import '../stylesheets/Profile.css';

const PopupDelete = (props) => {
  return props.trigger ? (
    <section className="delete-popup-container">
      <div className="delete-box">
        <h2>
          Are you sure you want to delete your account?
          <br />
          This action cannot be undone.
        </h2>
        <div className="delete-btns">
          <button
            id="closer-btn"
            onClick={() => {
              props.delete();
              props.setTrigger(false);
            }}
          >
            Confirm Delete
          </button>
          <button id="deleter-btn" onClick={() => props.setTrigger(false)}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  ) : (
    ''
  );
};

export default PopupDelete;
