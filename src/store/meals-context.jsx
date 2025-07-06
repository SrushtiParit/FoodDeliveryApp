import { useEffect, useReducer } from "react";
import React, { useState } from "react";

export const MealsContext = React.createContext({
  AllMeals: null,
  MealsInCart: [],
  AddToCart:(item)=>{},
  RemoveFromCart:()=>{}
});

function CartReducer(state, action){
  if(action.type ==='ITEM_ADD'){
    const existingCardItemIndex = state.items.findIndex((item)=>item.id === action.item.id)
    const updatedItems = [...state.items];
    if(existingCardItemIndex > -1){
      const existingItem = state.items[existingCardItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity+1
      }
      updatedItems[existingCardItemIndex] = updatedItem;
    }
    else{
      updatedItems.push({...action.item, quantity:1});
    }
    return{...state, items:updatedItems};
  }
  else if(action.type === 'ITEM_REMOVE'){
    const existingCardItemIndex = state.items.findIndex((item)=>item.id === action.id);
    const existingItem = state.items[existingCardItemIndex];
    const updatedItems = [...state.items];
    if(existingItem.quantity === 1){
      updatedItems.splice(existingCardItemIndex, 1);
    }else{
      const updatedItem ={
        ...existingItem,
        quantity: existingItem.quantity-1
      }
      updatedItems[existingCardItemIndex] = updatedItem;
    }
    return{...state, items:updatedItems}
  }
  return state;
}

export function MealsContextProvider({ children }) {
  const [allMeals, setAllMeals] = useState();
  const[cart, dispatchCartAction] = useReducer(CartReducer, {items:[]})

  useEffect(() => {
    async function getAllMeals() {
      const response = await fetch("http://localhost:3000/meals", {
        method: "GET",
      });
      const RespMeals = await response.json();
      setAllMeals(RespMeals);
    }
    getAllMeals();
  }, []);

  function AddToCart(item){
    dispatchCartAction({type: "ITEM_ADD", item})
  }

  function RemoveFromCart(id){
    dispatchCartAction({type:"ITEM_REMOVE", id})
  }

  const contextValue = {
    AllMeals: allMeals,
    MealsInCart: cart.items,
    AddToCart,
    RemoveFromCart
  };

  return (
    <MealsContext.Provider value={contextValue}>
      {children}
    </MealsContext.Provider>
  );
}
