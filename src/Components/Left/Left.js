import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Left = () => {
    const [laptops,setLaptop]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
</div>
        </div>
    );
};

export default Left;