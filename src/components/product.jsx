import './product.css';
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);

    let onQuantityChange = (value) => {
        //use the value to update the quantity
        setQuantity(value);
    };

    //add a function to return the total. Total = price*quantity
    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    };

    return (
        <div className='product'>
            <img className='productImg' src={'/img/'+ props.data.image}></img>
            <h2>{props.data.title}</h2>

            <div className="prices">
                <label className="total">Total: ${getTotal()}</label>
                <label>Price: ${props.data.price}</label>
            </div>

            <div className="controls">
                <QuantityPicker onChange= {onQuantityChange}></QuantityPicker>
                <button className="btn btn-danger btn-sm">Add</button>
            </div>
        </div>
    );
};

export default Product;