import React from 'react';
import './Right.css'
const Right = (props) => {
    let choose=props.choose
    return (
        <div>
           <h3 className='p-3'>Selected Laptops</h3> 
           <div className="d-grid gap-2 col-12 mx-auto">
           {
               choose.map(ch=>(<div key={ch.id} className='choose'>
               <img src={ch.img} className='ch-img' alt=""/>
                   <strong><p>{ch.name}</p></strong>
                    </div>))
           }
           <button className="btn btn-outline-primary" type="button" onClick={props.handleChooseone}>Choose 1</button>
           <button type="button" className="btn btn-danger" onClick={props.handleChooseagain}>Choose again</button>
           </div>
        </div>
    );
};

export default Right;