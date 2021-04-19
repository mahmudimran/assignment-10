import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    const {_id, car, price, image } = props.product;
    return (
        <div  className="col-md-3">
            <div style={{border:'1px solid gray' , padding:'15px'}} className="card mb-5">
                <img className="card-img-top" style={{height:'200px'}} src={image} alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{car}</h5>
                    <h3>${price}</h3>
                    <Link to = {"/checkout/"+ _id}> <button className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Products;