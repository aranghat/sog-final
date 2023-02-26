import React from 'react';
import ReactDOM from 'react-dom/client';


import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


/*
axios.interceptors.request.use((config) => {
    if(config.baseURL == "abcdcom")
    {
      config.headers['Authorization'] = 'Bearer 1234567890';
    }
    
    return config;
}, (error) => {});

axios.interceptors.response.use((response) => {
  console.debug(response);
}, (error) => {
  console.error(error);
});*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
     <App />
   </BrowserRouter>
);
