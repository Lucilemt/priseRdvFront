import styled from 'styled-components';

export const AppContainer = styled.div`
width:100vw;
height:100vh;
background-image: url(/bghomepage.jpg);
background-size: cover;
background-attachment: fixed;
background-position: center;
@media screen and (max-width: 1024px){
      background-image: url(/bgmedia.jpg);
  }
`