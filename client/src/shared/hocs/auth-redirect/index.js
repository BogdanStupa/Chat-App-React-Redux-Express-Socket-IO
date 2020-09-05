import React from "react";
import { Reditect } from "react-router-dom";


const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        console.log("withAuthTedirect")
        if(false){
          return <Reditect to="/signin" />
        }
        return <Component {...props} />
    }
    return RedirectComponent;
}

export default withAuthRedirect;