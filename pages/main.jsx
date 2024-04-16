import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/index.css';
import router from '../router.jsx';
import { Provider } from "react-redux";
import store from "../redux/store";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        {router.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
          ))}
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
