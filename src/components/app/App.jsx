// import { Routes, Route } from 'react-router-dom';
// import Home from '../../pages/homePage/HomePages';
import Home from '../home/Home'
// import Form from "../../pages/formPage/FormPage";
// import EventsListPage from "../../pages/eventsPage/EventsPage";
// import EventsList from 'components/eventsList/EventsList';




export const App = () => {  

    return (
      <div>   
        <Home/>
        {/* <Routes>
       
            <Route index="/" element={<EventsList/>} />
            <Route path="form" element={<Form/>} />
        
        </Routes> */}
      </div>
    );
  };
  