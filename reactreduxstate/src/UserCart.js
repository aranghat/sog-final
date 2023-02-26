import { useDispatch, useSelector } from "react-redux"
import { removeDish } from "./store/dishCartState"

export default function UserCart() {

    let userCart = useSelector(state => state.cart.dishes);
    let dispacher = useDispatch();

    const handleRemove = (dish) => {
        dispacher(removeDish(dish));
    }

    return (
        <div className="container">
            <h1>Cart</h1>
            <ul className="list-group">
                {userCart.map((item) => <li className="list-group-item">{item}
                    <button onClick={() => handleRemove(item) } className="btn btn-danger">Remove</button>
                </li>)}
            </ul>
            <div>
                <h1>Total Bill : { userCart.length * 200 }</h1>
            </div>
        </div>
    )
}