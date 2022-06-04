import { useState } from 'react';
import './App.css';
import NewsApp from './NewsApp/NewsApp';
import QuizApp from './QuizApp/QuizApp';
function App() {
  const [appOption,setAppOption]=useState("NewsApp")
  const switchApp=()=>{
    switch (appOption) {
      case "NewsApp":
        return <NewsApp/>
        break;
    case "QuizApp":
      return <QuizApp/>

      default:
        break;
    }
  }
  return (
    <div className="App">  

    <select name="" id="" onChange={(e)=>setAppOption(e.target.value)} > 
    <option value="NewsApp" > News App </option>
    <option value="QuizApp">Quiz App</option>
     </select>
   
   {switchApp()}
    </div>
    
  );
}

export default App;
