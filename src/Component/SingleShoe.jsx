import React from 'react';
import { Link } from 'react-router-dom';

const SingleShoe = ({shoe}) => {
    console.log(shoe)
    const {title,brand,price,image_url,_id} = shoe
    return (
        <><div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{brand}</p>
         
          <p>{price}</p>
          <div className="card-actions justify-center">
            <Link to={`/productdetails/${_id}`} ><button className="btn btn-primary">View Details</button></Link>
            
          </div>
        </div>
      </div></>
    );
};

export default SingleShoe;