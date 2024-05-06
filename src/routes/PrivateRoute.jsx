import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return <progress className="progress w-full"></progress>
    }
    if(!user){
        return <Navigate state={location.pathname} to='/Login' replace></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;