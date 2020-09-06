import React from "react";



function FormContainer(props){
    console.log("Hei")
    const {
        onSubmit,
        children
    } = props;
    console.log("he")
    return (
        <form onSubmit={onSubmit}>
            {
                children
            }
        </form>    
    );
}

export default FormContainer;