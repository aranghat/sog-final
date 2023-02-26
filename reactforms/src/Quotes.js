 import axios from 'axios';
import { useEffect,useState } from 'react';
 
 export default function Quotes(){

    const [count,setCount] = useState(0);
    const [quotes,setQuotes] = useState([]);
    
    useEffect(() => {
        document.title = "Total Quotes: "+quotes.length;}
    ,[quotes]);

    useEffect(() => 
        axios.get("https://type.fit/api/quotes")
             .then((response) => {
                setQuotes([...response.data]);
            })
    ,[]);    

    return(<div className='container'>
        {count}
        <button type='button' onClick={() => setCount(count+1)}>Click Me</button>
        <div>
            {quotes.map((quote) =>  { return( <div className='card mb-3'>
                        <div className='card-body'><i>"{quote.text}"</i>
                        <br/>
                        <b>{quote.author}</b>
                        </div>
                        </div>) })}
        </div>

        <button type='button' onClick={() => 
                { 
                    let quote = prompt("Enter your quore");
                     setQuotes([...quotes,{text:quote,author:"Sreehari Aranghat"}]);


                     }}>Add Quote</button>
    </div>)
}