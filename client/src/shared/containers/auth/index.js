import React from "react";

function AuthContainer(props){
    const   {
        title,
        formContainer,
        footerInfo
    } = props;
    return (
        <section className="auth-wrapper"> 
            <div className="form-container">
                <h1 className="form-title">
                    {
                        title
                    }
                </h1>
                {
                    formContainer
                }
            </div>
            <div className="info-container">
                {
                    footerInfo
                }
            </div>
        </section>
    );
}

export default AuthContainer;