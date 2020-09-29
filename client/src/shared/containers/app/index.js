import React from "react";
import {
    IconComponent,
    LabelComponent
} from "shared/components";
import constants from "modules/constants";

const AppContainer = (props) => {
    return(
        <div className="app-wrapper" >
            <span className="app-header"></span>
            <div className="app-container">
                <section className="logo-container">
                    <IconComponent
                        fill="#ffffff"
                        icon="message-text"
                        width={30}
                        height={30}
                    />
                    <div className="app-name">
                    <LabelComponent
                        color="#ffffff"
                        text={constants.LABELS.MAIN.APP_NAME}
                    />
                    </div>            
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