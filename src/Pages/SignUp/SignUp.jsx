import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import GoggleLogin from '../../Component/GoggleLogin/GoggleLogin';

const SignUp = () => {
  // const {success,setCuccess} = useState('')
  // const {error,setError} = useState('')
  const location = useLocation()
const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'
  
  const {createUser} = UseAuth()
  

 const handleCreateUser =(e)=>{
 
e.preventDefault()

const form = e.target;
const email = form.email.value;
const password = form.password.value;
console.log(password,email)
createUser(email,password)
.then(()=>{
  Swal.fire({
    title: "Good job!",
    text: "Sign Up",
    icon: "success"
  });
  navigate(from,{replace:true})
  
})
.catch((error)=>{
  console.log(error.message)

})
 }

    return (
        <>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:w-5/12 w-full">
    <div className="text-center mb-5 ">
      <h1 className="text-4xl font-bold ">Sign Up Now</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-full shadow-2xl bg-base-100">
      <form onSubmit={handleCreateUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label> 
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
           <p className='mt-5'>Already Have an Account Please <Link className=' btn-link' to={'/login'}>Login</Link></p>
          </label>
          {/* <label className="label">
          <p className='text-success mt-2'>{success}</p>
          </label>
          <label className="label">
           <p className='mt-2 text-red-600'>{error}</p>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <div className=" mt-6">
          <GoggleLogin/>
        </div>
      </form>
    </div>
  </div>
</div>
        </>
    );
};

export default SignUp;