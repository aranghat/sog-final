import { useHistory } from "react-router-dom";

export default function Login(){

    let navigate = useHistory();

    return(
        <div>
            <h1>Login</h1>
            <button type='button' 
            onClick={() => {

                localStorage
                .setItem("token"
                , "1234567890");

                navigate.push("/products");

            }}>Login</button>
        </div>
    )
}