import { Link } from "react-router-dom"
import { products } from "../Services/productservices"

export default function ProductList(){
    return (
        <div>
            <h1>Product List</h1>
            {
                products.map((product) => {
                    return <Link to={`/products/details/${product.id}/true`}>
                                <div key={product.id}>
                                    <h3>{product.name}</h3>
                                </div>
                            </Link>
                })
            }
        </div>
    )
}