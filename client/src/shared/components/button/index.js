import React from "react";
import classNames from "classnames";


const ButtonComponent = React.memo( props => {
    const {
        text,
        primary,
        type,
        link,
        isFetching,
        marginTop,
        height,
        onClick
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
                height
            }}
        >
            {
                isFetching 
                ? "loading"
                : text
            }
        </button>
        
    );
});

export default ButtonComponent;
