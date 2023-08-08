const EventsList = ({events, onClick}) => {
   
    return (
    
  <div>
    <h1>Events</h1>
    <ul>
          
     {events.length > 0 &&
        events.map(({ name, data, time, place, description, id, category, picture, priority }) => {
          return (
            <li key={id}>
                <div>
                   
                </div>
                <div>
                    <p>{name}</p>
                    <p>{data}</p>
                    <p>{time}</p>
                    <p>{place}</p>
                    <p>{description}</p>
                    <p>{category}</p>
                    <img src={picture} alt="event" />
                    <p>{priority}</p>
                </div>              
                <button type='button' onClick={() => onClick(id)}>Delete</button> 
            </li>
          );
        })} 
  
    </ul>

  </div>
  );
 }  
 
export default EventsList 