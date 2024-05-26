import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";





const PrivateRoute = ({children}) => {
    const {user,loading} = UseAuth()
    const location = useLocation()
    
    if( loading){
        return <p>loading......</p>
    }
    
    if (user){
        return  children
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;