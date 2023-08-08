import styled from "@emotion/styled";


export const Section = styled.section`
padding-left: 16px;
padding-right: 16px;
width: 1440px;
`;

export const Title = styled.h2`
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

export const List = styled.ul`
display: flex;
flex-wrap: wrap; 
margin: 0px auto;
padding: 0px;
list-style: none;
`;

export const ListItem = styled.li`
text-align: center;
margin-bottom: 30px;  
margin-right: 30px; 
width: 302px;
height: 480px;
background-color: lazur;
border-radius: 12px;
border: 1px solid red;

&:nth-of-type(4n) {
    margin-right: 0;
 }
 
 &:nth-last-of-type(-n+4) {
   margin-bottom: 0;   
}
`;


export const DateBox = styled.div`
display: flex;
justify-content: space-between;
padding-left: 8px;
padding-right: 8px;
font-size: 14px;
font-weight: 400;
line-height: 1.7;
color: #7B61FF;   
`;

export const Date = styled.p`
    padding-right: 8px;  
`;

export const Time = styled.p`
padding-right: 8px;  
`;

export const Place = styled.p`
    padding-right: 8px;  
`;

export const Name = styled.h3`
    margin-top: 0px;
    margin-bottom: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0px;
    text-align: left;
    color: #1C1B1F;
`;

export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0px;
    text-align: left;
    color: #1C1B1F;
`;

export const TextBox = styled.div`
padding-left: 8px;
`;