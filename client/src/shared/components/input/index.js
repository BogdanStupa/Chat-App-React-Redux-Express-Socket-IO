import React from "react";
import classNames from "classnames";
import { compose } from "redux";

const InputFormComponent = (props, ref) => {
    const {
        type,
        name,
        value,

        onChange,
        onFocus,
        
        keyDown,

        autoFocus,
        isFetching,
        multiline,
        placeholder,
        sendMessage,
        
        errors,
        search,
        
        iconComponent,
  
        maxLength,
        width,
        height,
        fontSize,
        paddingLeft,
        marginTop,
    } = props;

    const inputStyle = classNames({
        "input-error":errors,
        "disabled": isFetching,
        "search": search
    });

    const onKeyDown = event => {
        if(sendMessage && event.key === "Enter" && !event.shiftKey){
            event.preventDefault();
            keyDown();
            return false;
        }
        return true;
     }

    return (
        <div 
            className="input-wrapper"
            style={{
                width,
                height,
                fontSize,
                marginTop
            }}
        >
            <div 
                className="input-content"
                style={{
                    width,
                    height
                }}
            >
                {
                    multiline 
                    ? <textarea
                        className={inputStyle}
                        onChange={onChange}
                        onFocus={onFocus}
                        onKeyDown={onKeyDown}
                        value={value}
                        placeholder={placeholder}
                        disabled={isFetching}
                        maxLength={maxLength}
                        name={name}
                        style={{
                            minHeight:height,
                            paddingLeft,
                            fontSize
                        }}
                        name={name}
                        ref={ref}
                        />
                    : <input 
                        className={inputStyle}
                        type={type}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        placeholder={placeholder}
                        disabled={isFetching}
                        autoFocus={autoFocus}
                        value={value}
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