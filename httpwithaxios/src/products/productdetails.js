import{useParams,Link, Route ,useRouteMatch, Switch} from 'react-router-dom';
import { products } from "../Services/productservices"
import Offers from './offers';

export default function ProductDetails(){

    let {productid,showoffers} = useParams();
    let {path,url} = useRouteMatch();
    let product = products.find((product) => product.id === parseInt(productid));
    
   // console.debug(path,url);
    console.debug(`${path}/offers`);
    return (
        <div className='card m-5'>
            <div className='card-body'>
            <h1>Product Details</h1>
            {
                product && <div>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.id}</p>
                    
                </div>
            }

            {showoffers && <div>Its Raining Offers 
            <br></br>
            <Link to={ `${url}/offers`}>
                View Personalized Offers Here
            </Link></div>  }
            </div>

           <Switch>
                 <Route path={`/offers`} exact component={Offers}></Route>
           </Switch>
        </div>
    )
}