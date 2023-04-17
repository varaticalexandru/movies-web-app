import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// sets up a React application with routing functionality
// renders the App component to the root element of the DOM

const root = ReactDOM.createRoot(document.getElementById('root'));  // root element to render the app

root.render(
  
  <React.StrictMode>

    <BrowserRouter>

      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>

    </BrowserRouter>
    
  </React.StrictMode>
);

