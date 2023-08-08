import styled from "@emotion/styled";



export const FormBox = styled.form`
width: 1280px;
height: 460px;
padding: 15px;
`;


export const DivCommon = styled.div`
display: flex;
justify-content: space-between;
width: 1280px;

`;


export const DivBox = styled.div`
padding: 0px 20px;
`;

export const Button = styled.button`
  margin-right: 8px;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 193px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;


export const Label = styled.label`
font-family: Poppins;
font-size: 16px;
font-weight: 400;
line-height: 1;
letter-spacing: 0px;
text-align: right;
color: #7B61FF;
`;


export const Input = styled.input`
min-width: 360px;
height: 50px;
padding: 16px 12px;
font-size: 18px;
border-radius: 8px;
border: 1px solid #ACA7C3;
outline: transparent;


&:hover,
&:focus-within {
border-color: #FF2B77;
}
`;

export const TextareaBox = styled.textarea`
min-width: 360px;
height: 156px;
padding: 16px 12px;
font-size: 18px;
border-radius: 8px;
border: 1px solid #ACA7C3;
outline: transparent;


&:hover,
&:focus-within {
border-color: #FF2B77;
}
`;