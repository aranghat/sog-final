import { useState ,useEffect} from "react";

export default function MediaFeed(props)
{
    const [count,setState] = useState(props.count);

    useEffect(() => {
        console.log("Use Effect Got Renderd");
    },[]);

    return(
        <div>
            {new Date().toString()}
            <h1>Social Media Feed of 100 posts</h1>
            {props.counter}
        </div>
    )
}