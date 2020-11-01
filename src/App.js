import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './Components/Header/Header'
import FooterMainPage from "./Components/FooterMainPage/FooterMainPage";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
         <Route exact path="/" component={MainPage}/>
      </div>
      <FooterMainPage />
    </BrowserRouter>
  );
}

export default App;
