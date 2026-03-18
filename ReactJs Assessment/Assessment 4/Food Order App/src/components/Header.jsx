import LOGO from '../assets/logo.jpg'
export default function Header({qty, openCart}){
    return(
        <header id="main-header">
            <h1 id='title'>
                <img src={LOGO} alt="LOGO IMAGE" />
                ReactFood
            </h1>
                <button className='text-button' onClick={openCart}>Cart ({qty})</button>
        </header>

    );
}