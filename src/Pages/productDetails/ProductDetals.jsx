import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ProductDetals = () => {

    const shoe = useLoaderData()

    return (
        <><div className=" bg-base-100 shadow-xl flex justify-center items-center gap-5 my-10 ">
        <figure><img className='w-full h-[500px] rounded-2xl' src={shoe.image_url} alt="Album"/></figure>
        <div className=" flex flex-col justify-center items-center w-1/3 mx-auto pe-24">
          <h2 className="card-title">{shoe.title}</h2>
          <p>{shoe.description}</p>
         
          <div className='flex justify-between justify-items-center gap-16 '><div>  <p>{shoe.price}</p></div>
           <div>
           <p>{shoe.brand}</p></div></div>
        

          
        </div>
      </div></>
    );
};

export default ProductDetals;