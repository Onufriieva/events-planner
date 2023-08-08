import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/app/App';
import './index.css';
// import {ThemeProvider} from '@emotion/react';

// const theme = {
//   colors: {
//     fontColor: "#010101",    
//     online: "rgb(235, 47, 47)",
//     offline: "rgb(47, 235, 72)",
//   },
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter basename="/events-planner">
     <App />
    </BrowserRouter>  
  </React.StrictMode>
);
