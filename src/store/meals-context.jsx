import { useEffect } from "react";
import React, { useState } from "react";
//import { createContext } from "react";

export const MealsContext = React.createContext({
  AllMeals: null,
  MealsInCart: [],
});

export function MealsContextProvider({ children }) {
  const [allMeals, setAllMeals] = useState();

  useEffect(() => {
    async function getAllMeals() {
      const response = await fetch("https://t3f8qg-3000.csb.app/meals", {
        method: "GET",
      });
      const RespMeals = await response.json();
      setAllMeals(RespMeals);
    }
    getAllMeals();
  }, []);

  const contextValue = {
    AllMeals: allMeals,
    MealsInCart: null,
  };

  return (
    <MealsContext.Provider value={contextValue}>
      {children}
    </MealsContext.Provider>
  );
}
