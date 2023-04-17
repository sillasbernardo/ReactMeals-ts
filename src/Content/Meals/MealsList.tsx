import React from "react";

import "./MealsList.css";
import MealItem from "./MealItem/MealItem";

const MealList = () => {
  const meals = [
    {
      title: "Spaghetti and Meatballs",
      description: "Classic spaghetti and meatballs served with garlic bread.",
      price: 12.99,
    },
    {
      title: "BBQ Ribs",
      description:
        "Slow-cooked BBQ pork ribs served with baked beans and coleslaw.",
      price: 17.99,
    },
    {
      title: "Chicken Alfredo",
      description: "Creamy fettuccine alfredo with grilled chicken.",
      price: 14.99,
    },
    {
      title: "Fish and Chips",
      description:
        "Crispy beer-battered fish served with french fries and tartar sauce.",
      price: 15.99,
    },
    {
      title: "Steak Fajitas",
      description:
        "Sizzling steak fajitas with peppers and onions, served with warm tortillas.",
      price: 16.99,
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "Romaine lettuce, grilled chicken, parmesan cheese, and croutons tossed in Caesar dressing.",
      price: 11.99,
    },
    {
      title: "Veggie Burger",
      description:
        "Grilled vegetarian burger patty topped with lettuce, tomato, and avocado.",
      price: 13.99,
    },
    {
      title: "Beef Stroganoff",
      description:
        "Tender beef and mushrooms in a creamy sour cream sauce, served over egg noodles.",
      price: 15.99,
    },
    {
      title: "Shrimp Scampi",
      description:
        "Linguine pasta with garlic butter shrimp and a sprinkle of parmesan cheese.",
      price: 18.99,
    },
    {
      title: "Grilled Cheese and Tomato Soup",
      description:
        "Classic grilled cheese sandwich served with a side of tomato soup.",
      price: 8.99,
    },
  ];

  return (
    <div className="meals-list">
      {meals.map((meal) => {
        return (
          <MealItem
            key={Math.random().toString()}
            mealInfo={{
              title: meal.title,
              description: meal.description,
              price: meal.price,
            }}
          />
        );
      })}
    </div>
  );
};

export default MealList;
