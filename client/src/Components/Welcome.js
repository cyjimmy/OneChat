import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to OneChat</h1>
      <p>Start chatting with people from around the world.</p>
      <Link to="/chat">Start</Link>
    </div>
  );
};

export default Welcome;
