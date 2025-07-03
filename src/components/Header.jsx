import logoImg from "../assets/logo.jpg";
import { MealsContext } from "../store/meals-context";
import { UserProgressContext } from "../store/user-progress-context";
import Button from "./UI/Button";
import React from "react";

export default function Header() {
  const{MealsInCart} = React.useContext(MealsContext);
  const{ cartOpen } = React.useContext(UserProgressContext)
  const TotalItemsInCart = MealsInCart.length;

  function openCart(){
    cartOpen()
  }

  return (
    <main id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>Food Delivery App</h1>
      </div>
      <Button onClick={openCart}>Cart({TotalItemsInCart})</Button>
    </main>
  );
}
