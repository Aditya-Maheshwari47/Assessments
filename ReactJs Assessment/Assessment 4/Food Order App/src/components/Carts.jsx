import { useRef, useEffect, useState} from "react"
import Checkout from "./Checkout";

export default function Cart({cartMeal, openCart, addMeal, removeMeal}){

    const [openCheckOut , setOpenCheckout] = useState(false);
    const dialogRef = useRef();
    
    useEffect(() => {
        if (openCart) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    },[openCart])
    
    const currentTotal = cartMeal.reduce((accum, meal) => {
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
                {cartMeal.map((meal)=>
                    !meal.qty ? null : (
                    <li className="cart-item" key={meal.id}>

                        <p>{meal.name} - {meal.qty}  x  ${meal.price} </p>

                        <div className="cart-item-actions">
                            <button onClick={() =>removeMeal(meal)}>-</button>
                            {meal.qty}
                            <button onClick={() =>addMeal(meal)}>+</button>
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
            selectedMeals= {cartMeal}
        />

        </>
    )

}