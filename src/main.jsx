
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Update import path without file extension
import { ProductProvider } from './context/ProductProvider'; // Update import path without file extension
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </React.StrictMode>,
);
