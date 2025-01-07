import { useContext } from 'react'
import AuthContext from '../Context/AuthContext/AuthContext'
import Loading from '../Loading page/Loading';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoutes ({children}) {
    const location = useLocation();
    console.log(location);
    
    const{user, loading} = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }

  return <Navigate to={'/login'} state={location?.pathname}></Navigate>
}

export default ProtectedRoutes