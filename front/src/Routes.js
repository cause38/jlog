import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import List from './pages/List';
import Login from './pages/User/Login';
import Logout from './pages/User/Logout';
import './styles/css/main.css';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
