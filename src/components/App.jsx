import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import collection from "../collection";
import Card from "./Card";


function createCard(term){
  return(  
  
   
  <Card 
    key={term.id}
    id={term.id}
    name={term.name}
    img={term.img}
    url = {term.url}
    odiMatches ={term.odi_matches}
    odiRuns={term.odi_runs}
    odiInn = {term.odi_inn}
    testMatches ={term.test_matches}
    testRuns={term.test_runs}
    testInn = {term.test_inn}
    t20Matches ={term.t20_matches}
    t20Runs={term.t20_runs}
    t20Inn = {term.t20_inn}
    iplMatches ={term.ipl_matches}
    iplRuns={term.ipl_runs}
    iplInn = {term.ipl_inn}
   
    />
    
    );
}

function App() {
    return(<div>
        <h1 className="heading">List of Top 10 Batsman of the World</h1>
        {collection.map(createCard)}
        
 
    </div>);
}


export default App;