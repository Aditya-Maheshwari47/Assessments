import { useState, useEffect, useContext } from "react";
import Header from "./components/Header";
import Cart from "./components/Carts";
import { CartContext } from "./store/CartContext";

function App() {
   const { handleAddMeal } = useContext(CartContext);
  const[showMeal, setShowMeal] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // const [selectedMeals , setSelectedMeals] = useState([]);
  // const [totalCartQty, setTotalCartQty] = useState(0);
 
  // function handleAddMeal(meal){
  //   setTotalCartQty((prevQty) => prevQty + 1);
  //   setSelectedMeals((prevMeals) =>{

  //     const existingMeal = prevMeals.find(m => m.id === meal.id);
  //       if (existingMeal) {
  //         return prevMeals.map(m =>
  //         m.id === meal.id ? { ...m, qty: m.qty + 1 }: m
  //     );
  //     }
  //     return [
  //       ...prevMeals,
  //       { ...meal, qty: 1 }
  //     ];
  //   });
  // }
  // function handleRemoveMeal(meal){
  //   if(meal.qty > 0) {
  //     setTotalCartQty((prevQty) => prevQty - 1);
  //     setSelectedMeals((prevMeals) =>
  //       {
  //           return prevMeals.map(m =>
  //           m.id === meal.id ? { ...m, qty: m.qty - 1 }: m
  //         );  
  //       });
  //   }
  // }
  
  function handleOpenCart(){
    setIsCartOpen((prev) => !prev);
  }

  useEffect (() => {
    async function fetchMeals() {
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();
    setShowMeal(resData);
    }
    fetchMeals();
  },[]);
  return (
    <>
      <Header
      openCart = {handleOpenCart}
      />
      <Cart
      openCart = {isCartOpen}
      />
      <ul id="meals">
        {showMeal.map((meal) => (
          <li key={meal.id} className="meal-item">
            <img
            src={`http://localhost:3000/${meal.image}`} 
            alt={meal.name} />
            <h3>{meal.name}</h3>
            <h4 className="meal-item-price">${meal.price}</h4>
            <p className="meal-item-description">{meal.description}</p>
            <button className="button" onClick={() => handleAddMeal(meal)}> Add to cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
