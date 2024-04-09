import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header(){

    const cartCtx=useContext(CartContext);

    const userProgressCtx=useContext(UserProgressContext);

    const totalCarItems=cartCtx.items.reduce((toatalNumberOfItems,item)=>{
        return toatalNumberOfItems + item.quantity;
    },0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }
    return<header id="main-header">
        <div id="title">
            <img src={logoImg} alt='A restaurant'/>
            <h1>React Food</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart({totalCarItems})</Button>
        </nav>
    </header>
}