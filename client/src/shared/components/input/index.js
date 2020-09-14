import React from "react";
import classNames from "classnames";


function InputFormComponent(props){
    const {
        value,
        onChange,
        type,
        autoFocus,
        disabled,
        hasError,
        errorMessage,
        fullWidth,
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
                    value={value}
                    disabled={disabled}
                    >
                    {value}
                </textarea>
                : <input 
                    className={inputStyle}
                    type={type}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                
                />
            }
            {
                hasError ? (<span className="error-info">{errorMessage}</span>) : null
            }
        </div>
    );
}

export default InputFormComponent;