import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
const ErrorPage = () => {
    return (
        <div className=' flex flex-col justify-center items-center mt-36'>
            <h1 className='text-xl font-semibold text-rose-500 mb-5'>404 Error </h1>
            <h1 className='text-2xl font-extrabold mb-8 '>Page not Found</h1>

           <Link to='/'> <button className='btn btn-accent border rounded-lg'><FaArrowLeft />  Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;