import React, { useEffect, useState } from 'react';
import SingleShoe from '../../Component/SingleShoe';

const Shoes = () => {

    const [shoes, setShoes] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/shoes')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setShoes(data)
        })
    },[])

    return (
       <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Our Shoe Item</h1>
         <div className='grid grid-cols-3 gap-5 my-16'>
            {
                shoes?.map(shoe=><SingleShoe key={shoe.id} shoe={shoe}></SingleShoe>)
            }
        </div>
       </div>
    );
};

export default Shoes;