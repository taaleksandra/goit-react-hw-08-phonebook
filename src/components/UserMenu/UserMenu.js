import { useAuth } from 'hook/useAuth/useAuth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { isAuthorized } = useAuth();

  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      {!isAuthorized && (
        <>
          <button onClick={() => navigate('sign-in')}>Sign in</button>
          <button onClick={() => navigate('register')}>Sign up</button>
        </>
      )}

      {isAuthorized && (
        <>
          <p>{user.name}</p>
          <button onClick={handleLogOut}>Logout</button>
        </>
      )}
    </>
  );
};
