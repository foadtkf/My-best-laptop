import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Left from '../Left/Left';
import './Body.css'
const Body = () => {
    return (
        <div className="row">
    <div className="col-8"><Left></Left></div>
    <div className="col-4">col-4</div>
  </div>
    );
};

export default Body;