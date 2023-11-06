import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ScoreContextProvider } from './context/ScoreContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ScoreContextProvider>
        <App />
      </ScoreContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)