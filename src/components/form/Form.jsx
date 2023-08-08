import { nanoid } from 'nanoid';


const nameInputId = nanoid(5);
const dateInputId = nanoid(5);
const timeInputId = nanoid(5);
const placeInputId = nanoid(5)  
const descriptionInputId = nanoid(5);
const categoryInputId = nanoid(5);
const pictureInputId = nanoid(5);
const priorityInputId = nanoid(5);


const Form = ({onSubmit, onChange, nameValue, dateValue, timeValue, placeValue, descriptionValue, categoryValue, pictureValue, priorityValue}) => {
    return(
      <div>
        <h1>Create new event</h1>
        <form onSubmit={onSubmit}>
          <label>Title
            <input
              type="text" 
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
              onChange={onChange}
              value={nameValue}    
              id={nameInputId}          
            /> 
          </label>
            
          <label>Select date
            <input
              type="date"
              name="date"
              required
              onChange={onChange}
              value={dateValue}  
              id={dateInputId}            
            />  
          </label>

          <label>Select time
            <input
              type="time"
              name="time"
              required
              onChange={onChange}
              value={timeValue}  
              id={timeInputId}            
            />  
          </label>

          <label>Place
            <input
              type="text"
              name="place"
              title="Place may contain only letters, apostrophe, dash and spaces."
              required
              onChange={onChange}
              value={placeValue}  
              id={placeInputId}            
            />  
          </label>
        
          <label>Description
            <input
              type="text"
              name="description"
              title="Description may contain only letters, apostrophe, dash and spaces."
              required
              onChange={onChange}
              value={descriptionValue}  
              id={descriptionInputId}            
            />  
          </label>

          <label>Category
            <input
              type="text"
              name="category"
              onChange={onChange}
              value={categoryValue}  
              id={categoryInputId}            
            />  
          </label>

          <label>Add picture
            <input
              type="file"
              name="picture"
              onChange={onChange}
              value={pictureValue}  
              id={pictureInputId}            
            />  
          </label>

          <label>Priority
            <input
              type="text"
              name="priority"
              onChange={onChange}
              value={priorityValue}  
              id={priorityInputId}            
            />  
          </label>
          <button type="submit">Add event</button>
        </form>
      </div>  
    )
  }
  
  export default Form;