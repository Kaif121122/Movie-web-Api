import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { AppProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppProvider>
);
