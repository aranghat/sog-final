import {useSelector} from 'react-redux';
export default function Navigation()
{
    let cart = useSelector(state => state.cart.dishes);
    return(
       <div>Cart {cart.length}</div>
    )
}