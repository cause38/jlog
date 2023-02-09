import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import Login from 'pages/User/Login';
import Logout from 'pages/User/Logout';
import Write from 'pages/Post/Write';
import View from 'pages/Post/View';
import GlobalStyles from 'components/GlobalStyles';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/write" element={<Write />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
