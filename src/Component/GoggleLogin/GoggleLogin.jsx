import React from 'react';
import UseAuth from '../../hooks/UseAuth';

const GoggleLogin = () => {

    const {signInWithGoggle} = UseAuth()

const handleGoggleLogin =()=>{
    signInWithGoggle()


}

    return (
        <div>
            <button onClick={handleGoggleLogin} className="btn btn-secondary w-full">Login with goggle</button>
        </div>
    );
};

export default GoggleLogin;