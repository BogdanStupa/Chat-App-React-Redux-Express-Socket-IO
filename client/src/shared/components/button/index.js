import React, { forwardRef } from "react";
import { compose } from "redux";
import classNames from "classnames";


const ButtonComponent = forwardRef((props, ref) => {
    const {
        text,
        primary,
        type,
        link,
        isFetching,
        marginTop,
        height,
        width,
        textDecoration,
        onClick,
        children
    } = props;

    const styleButton = classNames({
        btn: true,
        "btn--default": true && !link && !isFetching,
        "btn--link": link,
        "btn--disabled": isFetching,
        "btn--primary": !isFetching && primary
    });

    return (
        <button
            className={styleButton}
            type={type}
            disabled={isFetching}
            onClick={onClick}
            style={{
                marginTop,
                height,
                width,
                textDecoration
            }}
            ref={ref}
        >
            {
                isFetching 
                ? "loading"
                : text
            }
            {
                children
            }
        </button>
        
    );
});

export default compose(
    React.memo
)(ButtonComponent);;
