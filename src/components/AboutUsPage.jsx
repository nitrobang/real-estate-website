// AboutUsPage.js
import React from "react";
import "./Page.css"; // Import your CSS file for styling

const AboutUsPage = () => {
  return (
    <div className="page">
      <div className="container">
        <h2>About Us</h2>
        <div className="content">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              consequat massa quis enim scelerisque, ut elementum tortor
              facilisis. Curabitur eu est eu arcu vehicula tristique.
            </p>
            <p>
              Fusce porta tellus nec ligula finibus, id posuere eros
              scelerisque. Nulla facilisi. Cras maximus, quam eu feugiat
              sagittis, nunc urna varius dui, id dictum risus eros nec justo.
            </p>
          </div>
          <div className="image">
            <img src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
