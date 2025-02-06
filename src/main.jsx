import React from 'react';
import ReactDOM from 'react-dom/client'; // Используем ReactDOM.createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создаём корневой элемент
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
