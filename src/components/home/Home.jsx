// import { Link, useLocation } from 'react-router-dom';
import { Component } from "react";
import EventsList from 'components/eventsList/EventsList';
import Form from "components/form/Form";
import { nanoid } from 'nanoid';



export class Home extends Component {
  state = {
      events: [   
      {id: 'id-1', name: 'event1', date: '1', time: '', place: 'Kyiv', description: '', category: '', picture: '', priority: ''},
      {id: 'id-2', name: 'event2', date: '1', time: '', place: 'Kyiv', description: '', category: '', picture: '', priority: ''},
      {id: 'id-3', name: 'event3', date: '1', time: '', place: 'Kyiv', description: '', category: '', picture: '', priority: ''},
      {id: 'id-4', name: 'event4', date: '1', time: '', place: 'Kyiv', description: '', category: '', picture: '', priority: ''},],
      name: '',
      date: '',
      time: '',
      place: '',
      description: '',
      category: '',
      picture: '',
      priority: ''
    }

 

  componentDidMount() {
    const events = localStorage.getItem('events');
    const parsedEvents = JSON.parse(events);

    if(parsedEvents) {
      this.setState({events: parsedEvents})
    }
  };


  componentDidUpdate(prevProps, prevState) {
    if(this.state.events !== prevState.events) {
      localStorage.setItem('events', JSON.stringify(this.state.events))
    }
  }

 
  handleInputChange = (e) => {
    this.setState(
        {[e.currentTarget.name]: e.currentTarget.value}
    );
  }


  handleSubmit = e => {
      e.preventDefault();
      this.setState(prevState => {
      const newEvent = {
        id: nanoid(),
        name: this.state.name,
        date: this.state.date,
        time: this.state.time,
        place: this.state.place,
        description: this.state.description,
        category: this.state.category,
        picture: this.state.picture,
        priority: this.state.priority,
      };
      return {
        events: [newEvent, ...prevState.events],
        name: '',
        date: '',
        time: '',
        place: '',
        description: '',
        category: '',
        picture: '',
        priority: ''
      };
    });
  };



  removeEvents = (eventId) => {  
    this.setState(prevState => ({   
      events: prevState.events.filter(event => event.id !== eventId),
    }))
  }


  
  render() {

    return (
      <div>
           

        <Form 
       onSubmit={this.handleSubmit}
       onChange={this.handleInputChange}
       nameValue={this.state.name}
       dateValue={this.state.date}
       timeValue={this.state.time}
       placeValue={this.state.place}
       descriptionValue={this.state.description}   
       categoryValue={this.state.category}
       pictureValue={this.state.picture}
       priorityValue={this.state.priority}   
       /> 
        

       <EventsList
       events={this.state.events}  
       onClick={this.removeEvents}  
       />
      
      </div>
    );
  };
}

export default Home 