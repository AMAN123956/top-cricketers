import React from "react";


function Card(props) {
    return(
        <div className="card">
          <div class="card-detail">
         <h1 className="index">{props.id}</h1>
         <h2 className="name">{props.name}</h2>
         <img src={props.img} alt="Batsman"  className="profileImg"/> 
        <a href={props.url} className="infoButton">
         <button className="btn btn-dark">More Info</button>
        </a>
        </div>
        </div>
    );
}

export default Card;