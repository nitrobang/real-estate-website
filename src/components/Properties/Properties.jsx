import React, { useState } from "react";

import { Products } from "./products";
import contents from "../content";
import "./Properties.css"; // Import your CSS file for styling



function Properties() {
  return (
    <div className="Cards">
      {contents.map((contents) => (
        <Products
          key={contents.id}
          image={contents.image}
          name={contents.name}
          price={contents.price}
          totalSales={contents.totalSales}
          timeLeft={contents.timeLeft}
          rating={contents.rating}
        />
      ))}
    </div>
  );
}

export default Properties;
