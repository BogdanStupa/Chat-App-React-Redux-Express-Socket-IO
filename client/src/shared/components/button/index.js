import React from "react";
import classNames from "classnames";


const ButtonComponent = React.memo( props => {
    const {
        text,
        primary,
        type,
        secondaryButton,
        link,
        isFetching,
        disabled,
        outline,
        marginTop,
        height,
        onClick
    } = props;

    const styleButton = classNames({
        btn: true,
        "btn--default": true && !link,
        "btn--link": link,
        "btn--disabled": disabled,
        "btn--primary": !disabled && primary
    });

    return (
        <button
            className={styleButton}
            type={type}
            disabled={isFetching}
            onClick={onClick}
            style={{
                marginTop,
                height
            }}
        >
            {
                isFetching && !disabled 
                ? "loading"
                : text
            }
        </button>
        
    );
});

export default ButtonComponent;
