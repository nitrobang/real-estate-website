// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import HomePage from "./HomePage/HomePage";
import Properties from "./Properties/Properties";
import WhyWorkWithUsPage from "./WhyWorkWithUsPage"; // Assuming you have a component for "Why Work With Us" page
import AboutUsPage from "./AboutUsPage"; // Assuming you have a component for "About Us" page
import Footer from "./footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/properties" component={Properties} />
          <Route path="/why-work" component={WhyWorkWithUsPage} />
          <Route path="/about" component={AboutUsPage} />
          {/* Add more routes for other pages if needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
