// HomePage.js
import React from "react";
import "./HomePage.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";




const HomePage = () => {
  return (
    <div className="main-content">
      <header className="header">
        <h1>Welcome to AwadhHousing</h1>
      </header>
      <section className="hero-section">
        <div className="hero-image">
          <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hero Image" />
        </div>
        <div className="hero-text">
          <h2>Discover Your Dream Home</h2>
          <p>Explore a wide range of properties that suit your lifestyle and preferences.</p>
          <Link to="/properties" className="btn">Explore Properties</Link>
        </div>
      </section>
      <section className="features-section">
        <div className="feature">
          <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Feature 1" />
          <h3>Modern Design</h3>
          <p>Discover homes with modern architecture and stylish interiors.</p>
        </div>
        <div className="feature">
          <img src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Feature 2" />
          <h3>Prime Locations</h3>
          <p>Find properties located in prime areas with easy access to amenities.</p>
        </div>
        <div className="feature">
          <img src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Feature 3" />
          <h3>Affordable Prices</h3>
          <p>Explore affordable housing options without compromising on quality.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
