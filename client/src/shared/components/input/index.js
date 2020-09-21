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
        marginTop,
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
                fontSize,
                marginTop
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
                    style={{
                        minHeight:height
                    }}
                    name={name}
                    ref={ref}
                    />
                : <input 
                    className={inputStyle}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={isFetching}
                    autoFocus={autoFocus}
                    style={{
                        minHeight:height
                    }}
                    name={name}
                    ref={ref}
                />
            }
            {
               errors ? (<div className="error-info">{errors}</div>) : null 
            }
        </div>
    );
};



export default compose(
    React.memo,
    React.forwardRef
)(InputFormComponent);