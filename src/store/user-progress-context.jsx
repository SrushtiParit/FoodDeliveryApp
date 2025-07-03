import React, { useState } from "react";

export const UserProgressContext = React.createContext({
    progress: '',
    cartOpen: ()=>{},
    cartClose:()=>{},
    checkOutOpen:()=>{},
    checkOutClose:()=>{}
})

export function UserProgressProvider({children}){
    const [userProgress, setUserProgress]= useState('');

    function cartOpen(){
        setUserProgress('cart');
    }

    function cartClose(){
        setUserProgress('');
    }

    function checkOutOpen(){
        setUserProgress('checkout');
    }

    function checkOutClose(){
        setUserProgress('');
    }
    const ctxValue ={
        progress: userProgress,
        cartOpen,
        cartClose,
        checkOutOpen,
        checkOutClose
    }
    return(
        <UserProgressContext.Provider value={ctxValue}>{children}</UserProgressContext.Provider>
    );
}