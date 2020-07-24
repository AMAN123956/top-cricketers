import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import collection from "../collection";
import Card from "./Card";

function createCard(term){
  return(  
  <div>
   
  <Card 
    key={term.id}
    id={term.id}
    name={term.name}
    img={term.img}
    url = {term.url}
   
    />
    
    </div>);
}

function App() {
    return(<div>
        <h1 className="heading">List of Top 10 Batsman of the World</h1>
        {collection.map(createCard)}
    
    </div>);
}


export default App;