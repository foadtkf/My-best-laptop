import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Laptop from '../Laptop/Laptop';
const Left = () => {
    const [laptops,setLaptop]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setLaptop(data))
    },[])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
laptops.map(laptop=><Laptop key={laptop.id} laptop={laptop}></Laptop>)
            }
</div>
        </div>
    );
};

export default Left;