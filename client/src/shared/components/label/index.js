import React from "react";
import ClassNames from "classnames";


const LabelComponent = React.memo( props => {
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
});

export default LabelComponent;