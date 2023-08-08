import styled from "@emotion/styled";

export const DivMain = styled.section`
padding-left: 16px;
padding-right: 16px;
width: 1440px;
`;

export const Title = styled.h1`
margin-top: 0px;
margin-bottom: 0px;
font-family: 'Poppins', sans-serif;
font-size: 32px;
font-weight: 600;
line-height: 1.5;
letter-spacing: 0em;
text-align: left;
color: #3F3F3F;
`;

export const FormBox = styled.form`
width: 1280px;
height: 460px;
padding: 15px;
font-family: 'Poppins', sans-serif;
font-size: 16px;
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
  padding: 16px 12px;
  margin-left: auto;
  margin-right: 20px; 
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #fff;
  border: 0;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  font-style: normal;
  font-weight: 500;
  min-width: 193px;
  box-shadow: 0px 3px 1px -2px #A68DAE47,
    0px 2px 2px 0px #A68DAE47, 0px 1px 5px 0px #A68DAE47;
  background-color: #7B61FF;

  &:hover,
  &:focus {
    background-color: #FF2B77;
  }
`;


export const Label = styled.label`
font-family: 'Poppins', sans-serif;
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
font-family: 'Poppins', sans-serif;
font-size: 16px;
line-height: 1;
font-weight: 400;
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