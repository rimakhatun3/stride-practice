import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ShoeRow from '../../Component/ShoeRow';


const AllProduct = () => {

    // const shoes = useLoaderData()
    // console.log(shoes)

    const [products,setProducts] = useState([])

    useEffect(()=>{
      fetch('http://localhost:3000/shoes')
      .then(res=>res.json())
      .then(data=>{
        setProducts(data)
      })
    },[])

    const handleDelete= (id)=>{
      setProducts(products.filter(product=>product.id!==id))
    }

    return (
      <><div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className='text-center'>
            <th>
           Id
            </th>
            <th>img</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        {
           products?.map(item=><ShoeRow key={item.id} item={item} onDelete={handleDelete}></ShoeRow>)
        }
          
        
          
        </tbody>
      
       
        
      </table>
    </div></>
    );
};

export default AllProduct;