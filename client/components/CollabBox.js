import React from 'react';
import '../stylesheets/CollabBox.css';
import Chat from './ChatFire';
import CodingCollab from './CodingCollab';
import Prompts from './Prompts';
import SendMessage from './SendMessage';
import { useEffect } from 'react';
import db from '../firebase';
import { useState } from 'react';

const CollabBox = (props) => {
  const [messages, setMessages] = useState([]);
  const friend = props.friend;
  const currUser = props.currUser;

  const collectionName = [friend, currUser].sort();

  useEffect(() => {
    console.log('hi');
    db.collection(`${collectionName}`)
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return props.trigger ? (
    <section className="collab-box-container">
      <div className="chat-box">
        <button
          className="close-btn"
          onClick={() => props.setButtonPopup(false)}
        >
          X
        </button>
        <div className="chat-container">
          <Prompts />
          <CodingCollab />
          <Chat
            currUser={props.currUser}
            friend={props.friend}
            messages={messages}
          />
          <SendMessage
            currUser={props.currUser}
            collectionName={collectionName}
          />
        </div>
      </div>
    </section>
  ) : (
    ''
  );
};

export default CollabBox;
