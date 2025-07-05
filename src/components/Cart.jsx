import React from "react";
import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/user-progress-context";
import { MealsContext } from '../store/meals-context'

export default function Cart(){
    const{ progress } = React.useContext(UserProgressContext);
    const{ MealsInCart } = React.useContext(MealsContext);
    console.log(MealsInCart);
    return(
        <Modal className="cart" open={progress==='cart'}>
            <h2>Your Cart</h2>
            <ul>

            </ul>
        </Modal>
    );
}