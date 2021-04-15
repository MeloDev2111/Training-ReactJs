import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutesProvider from "./RoutesProvider";

ReactDOM.render(
   <React.StrictMode>
      <RoutesProvider />
   </React.StrictMode>,
   document.getElementById('root')
);