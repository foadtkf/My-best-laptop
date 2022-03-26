import React from 'react';

const Laptop = (props) => {
const {name,price,brand,img}=props.laptop
    return (
        <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt=''></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Brand: {brand}</strong></p>
        <h6>Price: ${price}</h6>
      </div>
    </div>
  </div>
    );
};

export default Laptop;