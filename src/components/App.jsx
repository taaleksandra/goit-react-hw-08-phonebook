import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { SignIn } from 'pages/SignIn/SignIn';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register/Register';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { ProtectedRoute } from './ProtectedRoute';
import { RestrictedRoute } from './RestictedRoute';
import { useAuth } from 'hook/useAuth/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h2>Loading...</h2>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} />}
        />
        <Route
          path="/sign-in"
          element={<RestrictedRoute component={<SignIn />} />}
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute component={<Contacts />} redirectTo={'/sign-in'} />
          }
        />
      </Route>
    </Routes>
  );
};
