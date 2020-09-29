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
        search,
        iconComponent,
        paddingLeft,
        maxLength,
        fontSize="1.2rem"
    } = props;

    const inputStyle = classNames({
        "input-error":errors,
        "disabled": isFetching,
        "search": search
    });

    return (
        <div className="input-wrapper"
            style={{
                width,
                height,
                fontSize,
                marginTop
            }}
        >
            <div className="input-content">
                {
                    multiline 
                    ? <textarea
                        className={inputStyle}
                        onChange={onChange}
                        placeholder={placeholder}
                        disabled={isFetching}
                        maxLength={maxLength}
                        name={name}
                        style={{
                            minHeight:height,
                            paddingLeft
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
                        maxLength={maxLength}
                        style={{
                            minHeight:height,
                            paddingLeft
                        }}
                        name={name}
                        ref={ref}
                    />
                }
                <div className="input-icon">
                    { iconComponent ? iconComponent() : null }
                </div>
            </div>
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