import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav>
      <h4>Pizzeria Mamma Mia</h4>
    <button>🍕 Home</button>
    {token ? (
      <>
        <button>🔓 Profile</button>
        <button>🔒 Logout</button>
      </>
    ) : (
      <>
        <button>🔐 Login</button>
        <button>🔐 Register</button>
      </>
    )}
    <button>🛒 Total: ${total.toLocaleString()}</button>
  </nav>
  );
};

export default Navbar;
