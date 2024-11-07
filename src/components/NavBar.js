import React from 'react';

function NavBar({ user }) {
  return (
    <nav>
      <h1>Welcome, {user.name}!</h1>
    </nav>
  );
}

export default NavBar;

