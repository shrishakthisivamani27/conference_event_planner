import React from "react";
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay }) => {

  const grandTotal =
    totalCosts.venue +
    totalCosts.av +
    totalCosts.meals;

  return (
    <div className="pricing-app">

      <div className="display_box">

        <div className="header">
          <p className="preheading">
            <h3>Total Cost For The Event</h3>
          </p>
        </div>

        <div>
          <h2 id="pre_fee_cost_display" className="price">
            ${grandTotal}
          </h2>

          <div>
            <p>Venue: ${totalCosts.venue}</p>
            <p>Add-ons: ${totalCosts.av}</p>
            <p>Meals: ${totalCosts.meals}</p>
          </div>

        </div>

      </div>

      <div>
        <ItemsDisplay />
      </div>

    </div>
  );
};

export default TotalCost;