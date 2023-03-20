import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';

import { Contacts } from 'pages/Contacts';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={'home'} />
        <Route path="/register" element={'register'} />
        <Route path="/login" element={'login'} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
};
