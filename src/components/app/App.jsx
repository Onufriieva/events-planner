import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Home from '../home/Home';

export const App = () => {

    return(
        <div>
            <Home/>
            <Routes>
               <Route index="/" element={<Home/>} />
            </Routes>   

        </div>
  
    );
}