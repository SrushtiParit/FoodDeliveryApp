import React from "react";
import { MealsContext } from "../store/meals-context";

export default function Meals() {
  const { AllMeals } = React.useContext(MealsContext);
  if (!AllMeals) {
    return <p>Loading meals...</p>;
  }

  return (
    <ul id="meals">
      {AllMeals.map((meal) => {
        return (
          <li className="meal-item" key={meal.id}>
            <article>
              <img src={"backend/public/" + meal.image} />
              <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{meal.price}</p>
                <p className="meal-item-description">{meal.description}</p>
              </div>
              <p className="meal-item-actions">
                <button>Add to Cart</button>
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
