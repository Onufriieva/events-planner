import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter basename="/events-planner">
       <App />
      </BrowserRouter>
     
    </React.StrictMode>
  );
