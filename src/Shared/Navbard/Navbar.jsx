import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import UseAuth from '../../hooks/UseAuth';

const Navbar = () => {

  const {user,logOut} = UseAuth()
 

  const handleLogOut =()=>{
logOut()
.then(()=>{})
.catch((error)=>{
console.log(error.message)
})

  }

    const navItem = <>
     <li className='mr-2'><Link to={'/'}>Home</Link></li>
        
        <li className='mr-2'><Link to={'/about'}>About</Link></li>
        <li className='mr-2'><Link to={'/contact'}>Contact</Link></li>
        <li className='mr-2'><Link to={'/dashboard'}>Dashboard</Link></li>
    </>
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Stride</a>
  </div>
  <div className="navbar-center hidden lg:flex mr-10">
    <ul className="menu menu-horizontal px-5 ">
     {navItem}
    </ul>
  </div>
  <div className="navbar-end">
{
  user?<>
  <button onClick={handleLogOut} className='btn btn-sm mr-2'>LogOut </button>
 
  <div className="tooltip" data-tip={user?.displayName}>
  <div className='rounded-full'>
  <img className='w-12 rounded-full ' src={user?.photoURL} alt="" />
  </div>
</div>
  </>:
  <>
  <button className='btn btn-sm mr-2'> <Link to={'/registration'}>Sign Up</Link> </button>
    <button className='btn btn-sm'> <Link to={'/login'}>Login</Link> </button>
  </>
}

    
  </div>
</div>
        </>
    );
};

export default Navbar;