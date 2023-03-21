import React from 'react';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('sign-in')}>Sign in</button>
      <button onClick={() => navigate('register')}>Sign up</button>
      <p>tutaj przekazać usera</p>
      <button>Logout</button>
    </>
  );
};
