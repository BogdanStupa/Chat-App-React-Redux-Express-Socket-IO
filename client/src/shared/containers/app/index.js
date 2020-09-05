import React from "react";

function AppContainer(props){
    return(
        <div className="app-wrapper" >
            <span className="app-header"></span>
            <div className="app-container">
                <section className="logo-container">
                    This is logo
                </section>
                <div className="app-content">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    );
}

export default AppContainer;