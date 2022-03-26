
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Left = (props) => {
    const {name,price,brand,img}=props.laptop
    return (
             <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt=''></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Brand: {brand}</strong></p>
        <h6>Price: ${price}</h6>
        <button className="btn btn-outline-primary px-5" type="button" onClick={()=>props.addLaptop(props.laptop)}>Add <FontAwesomeIcon icon={faShoppingCart} /></button>
        
      </div>
    </div>
    </div>)
};

export default Left;