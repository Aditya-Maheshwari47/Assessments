import { CartContext } from "../store/CartContext"; 
import { useRef,useEffect, useActionState, useState, useContext} from "react";
import Success from "./Success";

export default function Checkout({openCheckOut, currentTotal, dialogRef}) {

    const { selectedMeals, handleClearCart } = useContext(CartContext);

    const [openSuccess, setOpenSuccess] = useState(false);
    const checkoutRef = useRef();
    
    useEffect(() => {
        if (openCheckOut) {
            checkoutRef.current.showModal();
            dialogRef.current.close();
        } else {
            checkoutRef.current.close();
        }
    },[openCheckOut])

    async function addOrders({name, email, street, postalCode, city}){
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers :{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order: {
            items: selectedMeals.filter(meal => meal.qty > 0),
            customer: {
              email,
              name,
              street,
              'postal-code': postalCode,
              city
            }
          }
        })
      });
      
    if (!response.ok) {
      throw new Error('Failed to submit order');
    }
      return response;
    }

    async function shareFormAction(prevState, formData){
        const name = formData.get('fullName');
        const email = formData.get('email');
        const street = formData.get('street');
        const postalCode = formData.get('postalCode');
        const city = formData.get('city');
        //verify //backend

        let errors = [];
        if(name.trim().length === 0){
            errors.push('Enter Full Name')
        }
        if(!email.trim() || !email.includes('@')){
            errors.push('Enter a valid Email.')
        }
        if(!street.trim()){
            errors.push('Must Enter street.')
        }
        if(postalCode.trim().length !== 6){
            errors.push('Must Enter 6 digit postalCode.')
        }
        if(!city.trim()){
            errors.push('Must Enter city.')
        }

        if(errors.length > 0){
            return {
                errors,
                enteredValues :{
                    name,
                    email,
                    street,
                    postalCode,
                    city
                }
            }
        }

      try{
        await addOrders({name, email, street, postalCode, city});
        checkoutRef.current.close();
  
        handleOpenSuccess();
        handleClearCart();

        return {errors : null};
      }
      catch (error){
        return {
          errors: ['Order failed. Please try again.'],
          enteredValues: {
            name,
            email,
            street,
            postalCode,
            city
          }
        };
      }
      
    }

    
  const [formState, formAction ] = useActionState(shareFormAction, {errors: null});

    function handleOpenSuccess(){
    setOpenSuccess(true);
    }

  return (
    <>
   
    <dialog className="modal" ref={checkoutRef}>
      <h2>Checkout</h2>
      <p>Total Amount : {currentTotal}</p>

      <form action={formAction}>
        <div className="control">
          <label>Full Name</label>
          <input type="text" name="fullName" defaultValue={formState.enteredValues?.name} />
        </div>

        <div className="control">
          <label>E-Mail Address</label>
          <input type="email" name="email" defaultValue={formState.enteredValues?.email} />
        </div>

        <div className="control">
          <label>Street</label>
          <input type="text" name="street" defaultValue={formState.enteredValues?.street}/>
        </div>

        <div className="control-row">
          <div className="control">
            <label>Postal Code</label>
            <input type="number" name="postalCode" defaultValue={formState.enteredValues?.postalCode} />
          </div>

          <div className="control">
            <label>City</label>
            <input type="text" name="city" defaultValue={formState.enteredValues?.city}/>
          </div>
        </div>

        {formState.errors && (
            <ul className="error">
                {formState.errors.map((error) =>
                    <li key={error}>{error}</li>
                )}
            </ul>
        )}

        <div className="modal-actions">
          <button 
            type="button"
            className="text-button"
            onClick={() => checkoutRef.current.close()}>
            Close
          </button>
          <button className="button" type="submit">Submit Order</button>
        </div>
      </form>
    </dialog>
    <Success openSuccess={openSuccess} setOpenSuccess={setOpenSuccess} />    
    </>
  );
}