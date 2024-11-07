import React from 'react';

function Home({ user }) {
  return (
    <div>
      <h2>Home Page</h2>
      <p>{user.bio}</p>
    </div>
  );
}

export default Home;
