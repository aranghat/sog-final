import { Link, Route, Switch } from "react-router-dom";
import ProductList from "./products/productlist";
import ProductDetails from "./products/productdetails";
import HomePage from "./HomePage";
import Page404 from "./404";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import Login from "./Login";

const getLoggedInuUser = () => {
    return {'name' : 'Sree', 'role' : 'admin'};
}

export default function App(){

    const requireLogin = (to, from, next) => {
        let token = localStorage.getItem('token');
        if(token){
            next();
        }else{
            next.redirect('/login');
        }
    }

    const requireRole = (to, from, next) => {
        let user = getLoggedInuUser();
        if(to.meta.requirerole){
            if(user.role == to.meta.requirerole)
            {
                 next();
            }
            else
                next.redirect('/login');
        }
        else
            next();
    }

    return (
        <div>
            <h1>React App</h1>
            <Link to="/products">Products</Link>
            <GuardProvider guards={[requireLogin,requireRole]}>
                <Switch>
                    <GuardedRoute path="/products" component={ProductList} exact ></GuardedRoute>
                    <GuardedRoute 
                            meta={{requirerole : 'admin'}}
                            path="/products/details/:productid/:showoffers" 
                            component={ProductDetails} exact></GuardedRoute>   
                    <Route path="/" component={HomePage} exact></Route>
                    <Route path="/login" component={Login} exact></Route>
                </Switch>
            </GuardProvider>
        </div>
    )
} 