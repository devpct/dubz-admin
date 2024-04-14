import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/index.css';
import router from '../router.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {router.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  </React.StrictMode>
);
