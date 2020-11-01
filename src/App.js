import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './Components/Header/Header'
import FooterMainPage from "./Components/FooterMainPage/FooterMainPage";
import MainPage from "./Components/MainPage/MainPage";
import Instruction from "./Components/Instruction/Instruction";
import Footer from "./Components/Footer/Footer";
import StartInstruction from "./Components/StartInstruction/StartInstruction";
import Test from './Components/Test/Test';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
         <Route exact path="/" component={MainPage}/>
         <Route path='/page/instruction' component={Instruction} />
         <Route path='/page/start_instruction/' component={StartInstruction} />
         <Route path="/page/iq_test" component={Test} />
      </div>
        <Route exact path='/' component={FooterMainPage} />
        <Route path='/page' component={Footer} />
    </BrowserRouter>
  );
}

export default App;
