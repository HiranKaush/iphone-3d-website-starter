import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SecondSection from "./components/SecondSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Iphone from "./components/Phone"; 
import Store from "./components/Store"
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Jumbotron />
              <SecondSection />
              <DisplaySection />
              <WebgiViewer />
            </>
          } />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
