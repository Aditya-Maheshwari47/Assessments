import { useRef, useEffect} from "react"

export default function Cart({cartMeal, openCart}){

    const dialogRef = useRef();

    useEffect(() => {
    if (openCart) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
},[openCart])
    
    return(
        <>
        <dialog className="cart modal" ref={dialogRef} >
            <h2>Your cart</h2>

            <ul>
                {cartMeal.map((meal)=>(
                    <li className="cart-item" key={meal.id}>
                        {meal.name} - {meal.qty}  X  ${meal.price}

                        <div className="cart-item-actions">
                        <button>-</button>
                        {meal.qty}
                        <button>+</button>

                        </div>
                    </li>
                ))
                }
            </ul>
            <button 
                className="text-button" 
                onClick={() => dialogRef.current.close()}>
                    Close
            </button>
             <button 
                className="text-button" 
                >
                    Go to Checkout
            </button>


        </dialog>

        </>
    )

}