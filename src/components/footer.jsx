// Footer.js
import React from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <div>
        <p>&copy; {currentYear} AwadhHousing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
