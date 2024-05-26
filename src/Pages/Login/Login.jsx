import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import Swal from 'sweetalert2';
import GoggleLogin from '../../Component/GoggleLogin/GoggleLogin';

const Login = () => {
const {signIn} = UseAuth()
const location = useLocation()
const navigate = useNavigate()
  const from = location?.state?.from?.pathname || '/'
  const handlelogin =(e)=>{
 
    e.preventDefault()
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password,email)
    signIn(email,password)
    .then((user)=>{
      console.log(user)
      Swal.fire({
        title: "Good job!",
        text: "successfully login",
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
      <h1 className="text-4xl font-bold ">Login Now</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-full shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
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
          <label className="label ">
           <p className='mt-5'>New To Here Please <Link className=' btn-link' to={'/registration'}>Sign Up</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
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

export default Login;