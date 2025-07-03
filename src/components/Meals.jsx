import React from "react";
import { MealsContext } from "../store/meals-context";
import {currencyFormatter} from '../util/formatting';
import Button from "./UI/Button";

export default function Meals() {
  const { AllMeals, AddToCart } = React.useContext(MealsContext);
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
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-description">{meal.description}</p>
              </div>
              <p className="meal-item-actions">
                <Button onClick={()=>AddToCart(meal)}>Add to Cart</Button>
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
