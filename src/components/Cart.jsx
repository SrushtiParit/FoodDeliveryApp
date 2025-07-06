import React from "react";
import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/user-progress-context";
import { MealsContext } from '../store/meals-context'
import {currencyFormatter} from '../util/formatting';
import Button from'./UI/Button';
import CartItem from "./CartItem";

export default function Cart(){
    const{ progress, cartClose } = React.useContext(UserProgressContext);
    const{ MealsInCart, AddToCart, RemoveFromCart } = React.useContext(MealsContext);

    const cartTotal = MealsInCart.reduce((totalPrice, item)=>totalPrice+item.quantity*item.price, 0);

    function handdleCloseCart(){
        cartClose();
    }
    return(
        <Modal className="cart" open={progress==='cart'} handleClose={handdleCloseCart}>
            <h2>Your Cart</h2>
            <ul>
                {MealsInCart.map((meal)=>
                    // <li key={meal.id}>{meal.name}-{meal.quantity}</li>
                    <CartItem key={meal.id} name={meal.name} quantity={meal.quantity} price={meal.price} onIncrease={()=>AddToCart(meal)} onDecrease={()=>RemoveFromCart(meal.id)}/>
                )}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textonly onClick={handdleCloseCart}>Close</Button>
                <Button onClick={handdleCloseCart}>Go to checkout</Button>
            </p>
        </Modal>
    );
}