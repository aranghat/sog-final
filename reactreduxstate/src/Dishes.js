import { useSelector,useDispatch } from 'react-redux';
import { addDish } from './store/dishCartState';

export default function Dishes()
{
    let dishes = useSelector(state => state.dishes.dishList);
    let dispacher = useDispatch();

    const handleAddToCart = (dish) => {
        dispacher(addDish(dish));
    }

    return(
        <div>
            <h1>Dishes</h1>
            <ul>
                { dishes.map((item) =>  <li>{item} <button
                onClick={() => handleAddToCart(item)}
                >Add To Cart</button></li>) }
            </ul>
        </div>
    )
}