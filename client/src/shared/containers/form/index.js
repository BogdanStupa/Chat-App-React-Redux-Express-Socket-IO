import React from "react";



function FormContainer(props){
    const {
        onSubmit,
        children
    } = props;
    
    return (
        <form  
            onSubmit={onSubmit}
            className="form"
        >
            {
                children
            }
        </form>   
    );
}

export default FormContainer;