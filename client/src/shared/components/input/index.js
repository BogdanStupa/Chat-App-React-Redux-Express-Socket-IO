import React from "react";
import classNames from "classnames";
import { compose } from "redux";

const InputFormComponent = (props, ref) => {
    const {
        onChange,
        type,
        name,
        autoFocus,
        isFetching,
        multiline,
        placeholder,
        width,
        height,
        errors,
        fontSize="1.2rem"
    } = props;

    const inputStyle = classNames({
        "input-error":errors,
        "disabled": isFetching
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
                    disabled={isFetching}
                    name={name}
                    />
                : <input 
                    className={inputStyle}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={isFetching}
                    autoFocus={autoFocus}
                    name={name}
                    ref={ref}
                />
            }
            {
               errors ? (<span className="error-info">{errors}</span>) : null 
            }
        </div>
    );
};



export default compose(
    React.memo,
    React.forwardRef
)(InputFormComponent);