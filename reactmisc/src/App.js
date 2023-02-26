import logo from './logo.svg';
import './App.css';

import useCounter from './hooks/useCounter';
import DummyComponent from './comp/DummyComponent';
import { memo, useMemo, useState } from 'react';
import MediaFeed from './comp/MediaFeedComponent';
import { render } from '@testing-library/react';

const MediaFeedMemo = memo(MediaFeed);

function App() {
  const [count,setCounter] = useState(0);
  const [notification,setNewMessages] = useState(0);
  const [temp,setTemp] = useState(0);

  let backGroundWorker= new Worker('tempraturesensor.js');
  backGroundWorker.onmessage = (e) => {
      setTemp(e.data);

  };

  backGroundWorker.terminate();
 
/*
  const [count, increment, decrement] = useCounter({initialValue:0});

  return (
    <div className="App">
      <h1>{count}</h1>
      <br/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );*/
  return(
     <div> 
        Tempratur :  {temp}
        <h1>Random Number : {notification}</h1>
        <h1>{count}</h1>
      
        <button onClick={()=> setNewMessages(Math.random())}>Random</button>
        <button onClick={()=> setCounter(count+1)}>Increment</button>
        <DummyComponent counter={count}></DummyComponent>

        <hr />
        <MediaFeedMemo counter={count}></MediaFeedMemo>
    </div>
  )
}

export default App;
