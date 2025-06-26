import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { JobProvider } from './JobContext.jsx';
// import './index.css'; // ✅ This is the Tailwind CSS import

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <JobProvider>
    <App />
    </JobProvider>
  </BrowserRouter>,
);

