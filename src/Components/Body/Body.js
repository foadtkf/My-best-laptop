import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Left from '../Left/Left';
const Body = () => {
    return (
        <div class="row">
    <div class="col-8"><Left></Left></div>
    <div class="col-4">col-4</div>
  </div>
    );
};

export default Body;