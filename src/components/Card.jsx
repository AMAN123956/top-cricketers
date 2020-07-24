import React from "react";
import collection from "../collection";
import {Table}  from "react-bootstrap";
function Card(props) {
    return(
        <div className="card">
          <div class="card-detail">
        <h1 className="index">{props.id} 
        <span style={{color:"blue"}}>
       
        </span>
        </h1> 
             
         
         <h2 className="name">{props.name}</h2>
         <img src={props.img} alt="Batsman"  className="profileImg"/> 
        <a href={props.url} className="infoButton" target="_blank">
         <button className="btn btn-dark">More Info</button>
        </a>
        <div className="stat">
        <Table striped bordered hover variant="dark" responsive="md">
  <thead>
    <tr>
      <th></th>
      <th>M</th>
      <th>Inn</th>
      <th>Runs</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Test</td>
      <td>{props.testMatches}</td>
      <td>{props.testInn}</td>
      <td>{props.testRuns}</td>
  </tr>
    <tr>
      <td>ODI</td>
      <td>{props.odiMatches}</td>
      <td>{props.odiInn}</td>
      <td>{props.odiRuns}</td>
    </tr>
    <tr>
      <td>T20</td>
      <td>{props.t20Matches}</td>
      <td>{props.t20Inn}</td>
      <td>{props.t20Runs}</td>
    </tr>
    <tr>
      <td>IPL</td>
      <td>{props.iplMatches}</td>
      <td>{props.iplInn}</td>
      <td>{props.iplRuns}</td>
    </tr>
  </tbody>
</Table>
</div>
      

        </div>
        </div>
    );
}

export default Card;