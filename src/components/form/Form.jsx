import { nanoid } from 'nanoid';
import { DivMain, FormBox, Input, TextareaBox, Label, DivBox, DivCommon, Button, Title } from './FormStyled'


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
      <DivMain>
        <Title>Create new event</Title>
        <FormBox onSubmit={onSubmit}>

          <DivCommon>
          <DivBox> 
          <Label>Title 
          <Input
              type="text" 
              name="name"
              title="Title may contain only letters, apostrophe, dash and spaces."
              required
              onChange={onChange}
              value={nameValue}    
              id={nameInputId}          
            /> 
          </Label>

          
          <Label>Description
            <TextareaBox
              type="text"
              name="description"
              title="Description may contain only letters, apostrophe, dash and spaces."
              required
              onChange={onChange}
              value={descriptionValue}  
              id={descriptionInputId}            
            />  
          </Label>
         </DivBox>          
            
         <DivBox>
  <Label>Select date
            <Input
              type="date"
              name="date"
              required
              onChange={onChange}
              value={dateValue}  
              id={dateInputId}            
            />  
          </Label>

          <Label>Select time
            <Input
              type="time"
              name="time"
              required
              onChange={onChange}
              value={timeValue}  
              id={timeInputId}            
            />  
          </Label>

          <Label>Place
            <Input
              type="text"
              name="place"
              title="Place may contain only letters, apostrophe, dash and spaces."
              required
              onChange={onChange}
              value={placeValue}  
              id={placeInputId}            
            />  
          </Label>
         </DivBox>
        
         <DivBox>
        <Label>Category
            <Input
              type="text"
              name="category"
              onChange={onChange}
              value={categoryValue}  
              id={categoryInputId}            
            />  
          </Label>

          <Label>Add picture
            <Input
              type="text"
              name="picture"
              onChange={onChange}
              value={pictureValue}  
              id={pictureInputId}       
              disabled     
            />  
          </Label>

          <Label>Priority
            <Input
              type="text"
              name="priority"
              onChange={onChange}
              value={priorityValue}  
              id={priorityInputId}            
            />  
          </Label>
         </DivBox>
          </DivCommon>
        
          
          <Button type="submit">Add event</Button>
        </FormBox>
      </DivMain>  
    )
  }
  
  export default Form;