import { AuthStatusContext } from "./AuthStatusContext";
import NewsArticle from "./NewsArticle";
import { StyleContext } from "./StyleContext";
import { useState } from "react";



function App() {
  let [isuserloggedin, setisuserloggedin] = useState(false);
  let [style, setstyle] = useState({fontFamily: "arial", border : "1px solid black", margin: 10, padding:10});
  return (
    <div className="App">
    <button onClick={() => setisuserloggedin(!isuserloggedin)}>
      {isuserloggedin ? "Logout" : "Login"}
    </button>

    <select onChange={(e) => setstyle({...style, fontFamily: e.target.value})}>
      <option value="arial">Arial</option>
      <option value="verdana">Verdana</option>
      <option value="times new roman">Times New Roman</option>
      <option value="courier">Courier</option>
    </select>

    <AuthStatusContext.Provider value={isuserloggedin}>
      <StyleContext.Provider value={style}>
          <NewsArticle>
              Nulla quis lorem ut libero malesuada 
              feugiat. Sed porttitor lectus nibh. 
              Quisque velit nisi, pretium ut lacinia in, 
              elementum id enim.
              <NewsArticle>
                  Nulla quis lorem ut libero malesuada
                  <NewsArticle>
                  </NewsArticle>
              </NewsArticle>
          </NewsArticle>
          <NewsArticle>
              Nulla quis lorem ut libero malesuada 
              feugiat. Sed porttitor lectus nibh. 
              Quisque velit nisi, pretium ut lacinia in, 
              elementum id enim.
          </NewsArticle>
      </StyleContext.Provider>
      </AuthStatusContext.Provider>
    </div>
  );
}

export default App;
