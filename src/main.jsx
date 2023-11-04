import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import NotFound from './components/NotFound.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Gallery from './components/Gallery.jsx';
import Create from './components/Create.jsx';
import Edit from './components/Edit.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/edit/:key" element={<Edit />} /> 
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
