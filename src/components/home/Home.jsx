import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { events } from '../../db';

const Home = () => {
    const location = useLocation();
    const [events, setEvents] = useState([ {
        name: "event1",
        date: "",
        time: "",
        place: "Kyiv",
        description: "",
        id: "1"
    },
        {
        name: "event2",
        date: "",
        time: "",
        place: "Lviv",
        description: "",
        id: "2"
    },
    {
        name: "event3",
        date: "",
        time: "",
        place: "Odessa",
        description: "",
        id: "3"
    },
    {
        name: "event4",
        date: "",
        time: "",
        place: "Odessa",
        description: "",
        id: "4"
    },
    {
        name: "event5",
        date: "",
        time: "",
        place: "Kyiv",
        description: "",
        id: "5"
    },
    {
        name: "event6",
        date: "",
        time: "",
        place: "Lviv",
        description: "",
        id: "6"
    },
    {
        name: "event7",
        date: "",
        time: "",
        place: "Odessa",
        description: "",
        id: "7"
    },
    {
        name: "event8",
        date: "",
        time: "",
        place: "Kyiv",
        description: "",
        id: "8"
    },
    {
        name: "event9",
        date: "",
        time: "",
        place: "",
        description: "Lviv",
        id: "9"
    },
    {
        name: "event10",
        date: "",
        time: "",
        place: "Odessa",
        description: "",
        id: "10"
    },
    {
        name: "event11",
        date: "",
        time: "",
        place: "Kyiv",
        description: "",
        id: "11"
    },
    {
        name: "event12",
        date: "",
        time: "",
        place: "Lviv",
        description: "",
        id: "12"
    },]);

   

  return (
    
  <div>
    <h1>Events</h1>
    <ul>
       
    {events.length > 0 &&
        events.map(({ name, data, time, place, description, id }) => {
          return (
            <li key={id}>
                <div>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{data}</p>
                    <p>{time}</p>
                    <p>{place}</p>
                    <p>{description}</p>
                </div>              
              
            </li>
          );
        })}
  
    </ul>

  </div>
  );
 }

  
 
export default Home 