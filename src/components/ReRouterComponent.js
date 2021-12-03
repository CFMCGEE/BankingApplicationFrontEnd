import { Navigate, Outlet } from "react-router-dom";

const ReRouterComponent = () => {

    const auth = null; 

    return auth ? <Outlet /> : <Navigate to="/accounts" />;
    
}


export default ReRouterComponent
