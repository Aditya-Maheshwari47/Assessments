import { useRef, useEffect, useState} from "react"
import Checkout from "./Checkout";

import { useContext } from "react";
import { CartContext } from "../store/CartContext";
export default function Cart({openCart}){

    const{
        selectedMeals,
        handleAddMeal,
        handleRemoveMeal,
    } = useContext(CartContext);

    const [openCheckOut , setOpenCheckout] = useState(false);
    const dialogRef = useRef();
    
    useEffect(() => {
        if (openCart) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    },[openCart])
    
    const currentTotal = selectedMeals.reduce((accum, meal) => {
                const mealTotal = (meal.qty * meal.price)
                return accum + mealTotal;
            }
            , 0);

    function handleOpenCheckout(){
        setOpenCheckout((prevState) => !prevState);
    }

    return(
        <>

        <dialog className="cart modal" ref={dialogRef} >
            <h2>Your cart</h2>
            <ul>
                {selectedMeals.map((meal)=>
                    !meal.qty ? null : (
                    <li className="cart-item" key={meal.id}>

                        <p>{meal.name} - {meal.qty}  x  ${meal.price} </p>

                        <div className="cart-item-actions">
                            <button onClick={() =>handleRemoveMeal(meal)}>-</button>
                            {meal.qty}
                            <button onClick={() =>handleAddMeal(meal)}>+</button>
                        </div>
                    </li>
                    )   
                )
                }
            </ul>
            <div className="cart-total">${currentTotal}</div>
            <div className="modal-actions">
                <button 
                    className="text-button" 
                    onClick={() => dialogRef.current.close()}>
                        Close
                </button>
                <button 
                    onClick={handleOpenCheckout} 
                    className="button" 
                > Go to Checkout
                </button>
            </div>

        </dialog>
        <Checkout
            openCheckOut = {openCheckOut}
            currentTotal = {currentTotal}
            dialogRef = {dialogRef}
        />
        </>
    )

}