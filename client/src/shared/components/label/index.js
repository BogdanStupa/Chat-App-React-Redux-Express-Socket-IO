import React from "react";

function LabelComponent(props){
    const {
        text,
        children
    } = props;

    return (
        <label>
            {text}
            {children}
        </label>
    );
}

export default LabelComponent;