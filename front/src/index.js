import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes';
import {RecoilRoot} from 'recoil';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>
);
