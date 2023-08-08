import noImage from '../../images/no-image.png';
import { List, ListItem, Section, Title, DateBox, Date, Time, Place, Name, Description, TextBox } from './EventsListStyled'

const EventsList = ({events, onClick}) => {
   
    return (
    
  <Section>
    <Title>Events</Title>
    <List>
          
     {events.length > 0 &&
        events.map(({ name, date, time, place, description, id, category, picture, priority }) => {
          return (
            <ListItem key={id}>
                <div>
                   
                </div>
                <div>
                    <img src={noImage} alt="" width="302" height="296" />  
                    <DateBox>
                    <Date>{date}</Date>
                    <Time>{time}</Time>
                    <Place>{place}</Place>
                    </DateBox>             
                 
                 <TextBox>
                 <Name>{name}</Name>
                    <Description>{description}</Description>

                 </TextBox>
                 
                    <p>{category}</p>                  
                    <p>{priority}</p>
                </div>              
                <button type='button' onClick={() => onClick(id)}>Delete</button> 
            </ListItem>
          );
        })} 
  
    </List>

  </Section>
  );
 }  
 
export default EventsList 