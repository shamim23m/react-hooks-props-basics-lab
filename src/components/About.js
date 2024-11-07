import React from 'react';

function About({ user }) {
  return (
    <div>
      <h2>About</h2>
      <p>{user.description}</p>
    </div>
  );
}

export default About;
