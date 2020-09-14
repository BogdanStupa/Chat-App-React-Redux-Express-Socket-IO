import React from "react";
import classNames from "classnames";


function ButtonComponent(props){
    const {
        text,
        primary,
        secondaryButton,
        link,
        isFetching,
        disabled,
        outline,
        marginTop,
        height
    } = props;

    const styleButton = classNames({
        btn: true,
        "btn--default": true && !link,
        "btn--link": link,
        "btn--disabled": disabled,
        "btn--primary": !disabled && primary
    });

    const onClick = () => {

    }
    return (
        <button
            className={styleButton}
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
}

export default ButtonComponent;
