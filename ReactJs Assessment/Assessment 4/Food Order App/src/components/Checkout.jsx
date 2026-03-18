import { useRef,useEffect, useActionState} from "react";

export default function Checkout({openCheckOut, currentTotal}) {
    const checkoutRef = useRef();
    
    useEffect(() => {
        if (openCheckOut) {
            checkoutRef.current.showModal();
        } else {
            checkoutRef.current.close();
        }
    },[openCheckOut])

    function shareFormAction(prevState, formData){
        const fullName = formData.get('fullName');
        const email = formData.get('email');
        const street = formData.get('street');
        const postalCode = formData.get('postalCode');
        const city = formData.get('city');
        //verify //backend

        let errors = [];
        if(fullName.trim().length === 0){
            errors.push('Enter Full Name')
        }
        if(!email.includes('@')){
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
                    fullName,
                    email,
                    street,
                    postalCode,
                    city
                }
            }
        }

        return {errors : null};
    }

    
    const [formState, formAction ] = useActionState(shareFormAction, {errors: null});

  return (
    <dialog className="modal" ref={checkoutRef}>
      <h2>Checkout</h2>
      <p>Total Amount : {currentTotal}</p>

      <form action={formAction}>
        <div className="control">
          <label>Full Name</label>
          <input type="text" name="fullName" defaultValue={formState.enteredValues?.fullName} />
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
          <button className="button">Submit Order</button>
        </div>
      </form>
    </dialog>
  );
}