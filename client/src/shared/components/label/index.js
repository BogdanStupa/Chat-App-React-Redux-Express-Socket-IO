import React from "react";
import ClassNames from "classnames";


function LabelComponent(props){
    const {
        text,
        children
    } = props;

    return (
    <label className="label">
        {text}
        {children}
    </label>
    );
}

export default LabelComponent;