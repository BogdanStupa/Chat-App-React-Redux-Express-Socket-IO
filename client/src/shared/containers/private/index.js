import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoute = ({ children, ...rest }) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <Route 
            {...rest}
            render={() => 
                isAuth 
                    ?  children  
                    :  <Redirect 
                            to="/signin"  
                      />
            }
        />
    )
}

export default PrivateRoute;
