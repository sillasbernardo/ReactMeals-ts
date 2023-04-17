import React from "react";

import "./Content.css";
import MealList from "./Meals/MealsList";

const Content = () => {
  return (
    <section className="section">
      <div className="top-text">
        <h1>Delicious Food, Delivered To You</h1>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experimented chefs!</p>
      </div>
      <MealList />
    </section>
  )
}

export default Content;