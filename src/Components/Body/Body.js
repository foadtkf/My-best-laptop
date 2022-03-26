import React, { useEffect, useState } from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './Body.css';
const Body = () => {
  const [laptops,setLaptop]=useState([])
    const [choose,setChoose]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setLaptop(data))
    },[])
    const addLaptop=(name)=>{
      let newCart = []
      const exist = choose.find(ch=> ch.id === name.id)
      if(choose.length>3){
        alert('cannot add more!')
        newCart = [...choose]
      }
      else if(!exist){
          newCart = [...choose, name];
      }
      else{
          newCart = [...choose]
      }
      setChoose(newCart)
    }
    const handleChooseagain=()=>{
const emptylist=[]
setChoose(emptylist)
// setSelected(emptylist)
    }
    return (
        <div className="row">
    <div className="col-8">
    <div className="row row-cols-1 row-cols-md-3 g-4">
            {
laptops.map(laptop=><Left key={laptop.id} laptop={laptop} addLaptop={addLaptop}></Left>)
            }
    </div>
    </div>
    <div className="col-4"><Right handleChooseagain={handleChooseagain} choose={choose}></Right></div>
  </div>
    );
};

export default Body;