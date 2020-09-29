import React from "react";


const LabelComponent = React.memo( props => {
    const {
        text,
        children,
        color
    } = props;



    return (
        <label 
            className="label"
            style={{
                color
            }}
        >
            {text}
            {children}
        </label>
    );
});

export default LabelComponent;