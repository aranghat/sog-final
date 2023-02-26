
/*
      

*/

import { useState } from "react";



function App() {

  let [heading,setHeading] = useState('My Awsome Restaurent')
  return (
    <div className="container">
        <h1>{heading}</h1>
        <button className="btn btn-primary"
        onClick={() => { setHeading("Hello Restaurent") }}
        >Change the heading</button>
    </div>
  );
}

export default App;
