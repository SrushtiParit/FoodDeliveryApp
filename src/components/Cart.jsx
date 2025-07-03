import React from "react";
import Modal from "./UI/Modal";
import { UserProgressContext } from "../store/user-progress-context";

export default function Cart(){
    const{ progress } = React.useContext(UserProgressContext)
    return(
        <Modal id="cart" open={progress==='cart'}>
            <h2>your modal component</h2>
        </Modal>
    );
}