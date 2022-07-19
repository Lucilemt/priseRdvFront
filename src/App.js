import React from 'react';
import './App.css';
// import Form from './components/Form';
// import DataFetchAllReducer from './components/DataFetchAllReducer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
// import NotFound from './components/NotFound.js/NotFound';
// import NavBar from './components/NavBar/NavBar';
import Marketing from './components/Services/Marketing/Marketing';
import Developpement from './components/Services/Developpement/Developpement';
import Header from './components/Header/Header';
// import { Button } from './components/Button/Button.style';
import {AppContainer} from './components/AppContainer/AppContainer.js'
// import TestJS from './components/TestJS';
// import { Helmet } from 'react-helmet';

// import Script from '@gumgum/react-script-tag';



function App() {
  return (
      <AppContainer className="App">


      <Header/>
    
      {/* <NavBar/> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}>
          <Route path="/services/marketing" element={<Marketing/>}/>
          <Route path="/services/developpement" element={<Developpement/>}/>
          
        </Route>
        <Route path="/profile/:id" element={<Profile/>}/>
        {/* <Route path="/*" element={<NotFound/>}/> */}

      </Routes>
      {/* <TestJS/> */}
      {/* <Form/>
      <DataFetchAllReducer/> */}
    </AppContainer>
  );
}

export default App;
