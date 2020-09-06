import React from "react";

function InputComponent(props){
    const {
        value,
        onChange,
        type
    } = props;

    return (
        <div className="imput-wrapper">
            <input
                type={type}
                onChange={onChange}
                value={value}
            />
        </div>
        
    );
}

export default InputComponent;