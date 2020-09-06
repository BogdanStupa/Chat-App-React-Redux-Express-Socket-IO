import React from "react";

function ButtonComponent(props){
    const {
        text,
        primaryButton,
        secondaryButton,
        disabledButton,
        linkButton,
        defaultButton,
        isFetching,
    } = props;

    return (
        <button>
            {
                text
            }
        </button>
    );
}

export default ButtonComponent;
