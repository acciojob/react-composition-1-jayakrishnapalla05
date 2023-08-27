
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
const [Tabs,setTabs]=useState("");


function handleClick(e){
  setTabs(e.target.innerText);
}





  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li onClick={handleClick}>Tab 1</li>
          <li onClick={handleClick}>Tab 2</li>
          <li onClick={handleClick}>Tab 3</li>
        </ul>
        <p>This is the content for {Tabs}</p>
    </div>
  )
}

export default App
