import LOGO from '../assets/logo.jpg'
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

export default function Header({openCart}){

    const {totalCartQty} = useContext(CartContext);

    return(
        <header id="main-header">
            <h1 id='title'>
                <img src={LOGO} alt="LOGO IMAGE" />
                ReactFood
            </h1>
                <button className='text-button' onClick={openCart}>Cart ({totalCartQty})</button>
        </header>

    );
}