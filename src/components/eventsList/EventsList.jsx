import noImage from '../../images/no-image.png';
import { List, ListItem } from './EventsListStyled'

const EventsList = ({events, onClick}) => {
   
    return (
    
  <div>
    <h1>Events</h1>
    <List>
          
     {events.length > 0 &&
        events.map(({ name, data, time, place, description, id, category, picture, priority }) => {
          return (
            <ListItem key={id}>
                <div>
                   
                </div>
                <div>
                    <p>{name}</p>
                    <p>{data}</p>
                    <p>{time}</p>
                    <p>{place}</p>
                    <p>{description}</p>
                    <p>{category}</p>
                    <img src={noImage} alt="" width="180" height="260" />
                    <p>{priority}</p>
                </div>              
                <button type='button' onClick={() => onClick(id)}>Delete</button> 
            </ListItem>
          );
        })} 
  
    </List>

  </div>
  );
 }  
 
export default EventsList 