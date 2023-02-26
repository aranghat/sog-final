import { useHistory } from "react-router-dom"

export default function HomePage(){

    let navigate = useHistory();
    return (
        <div>
            <button type="button" class="btn btn-primary"
        onClick={() => {
            navigate.push("/products");
        }}>
            Navidate To Produces</button>
        </div>
    )
}