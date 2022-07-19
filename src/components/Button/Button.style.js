import styled from 'styled-components';


export const Button = styled.button`
width : 200px;
height: 50px;
align-items: flex-end;
background-color: ${(props)=>props.backgroundColor};
color: white;
border-radius: 0.8rem 0.8rem 0.8rem 0.8rem;
border: none;
margin-right: 0.3rem;
&:hover{
    background-color: white;
    color: ${(props)=>props.backgroundColor};
    border: 1px solid ${(props)=>props.backgroundColor};
}
`

