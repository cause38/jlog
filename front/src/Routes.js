import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import List from './pages/List';
import './styles/css/main.css';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
