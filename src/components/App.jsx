import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { SignIn } from 'pages/SignIn/SignIn';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register/Register';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
