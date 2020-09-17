import React from "react";
import classNames from "classnames";


function InputFormComponent(props){
    const {
        onChange,
        type,
        name,
        autoFocus,
        disabled,
        hasError,
        errorMessage,
        multiline,
        placeholder,
        width,
        height,
        fontSize="1.2rem"
    } = props;


    const inputStyle = classNames({
        "input-error":hasError
    });

    return (
        <div className="input-wrapper"
            style={{
                width,
                height,
                fontSize
            }}
        >
            {
                multiline 
                ? <textarea
                    className={inputStyle}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                    />
                : <input 
                    className={inputStyle}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                
                />
            }
            {
                hasError ? (<span className="error-info">{errorMessage}</span>) : null
            }
        </div>
    );
}

export default InputFormComponent;