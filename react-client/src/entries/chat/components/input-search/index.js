import React from "react";
import { 
    InputFormComponent,
    IconComponent
 } from "shared/components";



const InputSearchComponent = props  => {
    const {
        fontSize,
        autoFocus,
        keyDown
    } = props;

    
    return (
        <InputFormComponent
            type="text"
            maxLength={12}
            height="2.5rem"
            paddingLeft={35}
            fontSize={fontSize}
            autoFocus={autoFocus}
            searchContact
            keyDown={keyDown}
            iconComponent={() => (
                <IconComponent
                    fill="#555657"
                    icon="search"
                    width={28}
                    height={28}
                    margin="0px 0px 0px 2px"
                />
            )}
        />
    );
};

export default InputSearchComponent;