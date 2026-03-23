import { createContext, useState} from "react";

export const CartContext = createContext({
    selectedMeals : [],
    totalCartQty: 0,
    handleAddMeal: () => {},
    handleRemoveMeal: () => {},
    handleClearCart:() => {}
});

export function CartProvider({children}){
    const [selectedMeals , setSelectedMeals] = useState([]);
    const [totalCartQty, setTotalCartQty] = useState(0);

    function handleAddMeal(meal){
    setTotalCartQty((prevQty) => prevQty + 1);
    setSelectedMeals((prevMeals) =>{

      const existingMeal = prevMeals.find(m => m.id === meal.id);
        if (existingMeal) {
          return prevMeals.map(m =>
          m.id === meal.id ? { ...m, qty: m.qty + 1 }: m
      );
      }
      return [
        ...prevMeals,
        { ...meal, qty: 1 }
      ];
    });
  }

  function handleRemoveMeal(meal){
    if(meal.qty > 0) {
      setTotalCartQty((prevQty) => prevQty - 1);
      setSelectedMeals((prevMeals) =>
        {
            return prevMeals.map(m =>
            m.id === meal.id ? { ...m, qty: m.qty - 1 }: m
          );  
        });
    }
  }

  function handleClearCart(){
    setSelectedMeals([]);
    setTotalCartQty(0);
  }
  const value = {
    selectedMeals,
    totalCartQty,
    handleAddMeal,
    handleRemoveMeal,
    handleClearCart
  };


  return <CartContext.Provider value={value}>
    {children}
  </CartContext.Provider>
  
}