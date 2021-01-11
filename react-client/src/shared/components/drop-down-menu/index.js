import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";
import classNames from "classnames";
import onClickOutside from "react-onclickoutside";
import { ButtonComponent } from "shared/components";



function DropDownMenuComponent(props){
    const {
        icon,
        options 
    } = props;

    const [isOpen, setIsOpen] = useState(false);
    const boxRef = useRef();
    const tooltipRef = useRef();
    
    const { styles, attributes } = usePopper(boxRef.current, tooltipRef.current, {
        placement:"bottom-end"
    });

    const onClickHandler = () => setIsOpen(!isOpen);

    DropDownMenuComponent.handleClickOutside = () => setIsOpen(false);

    return (    
        <div className="drop-down-wrapper">
            <div ref={boxRef}>
                <ButtonComponent
                    link
                    onClick={onClickHandler}
                >
                    { icon }
                </ButtonComponent>
            </div>
            <div 
                className={classNames("tooltip",{ "tooltip-hidden": !isOpen })}
                ref={tooltipRef} 
                style={styles.popper} 
                { ...attributes.popper }
            >
                {
                    options.map((item, index) => (
                        <li key={index} >
                            <ButtonComponent
                                link
                                textDecoration="none"
                                onClick={item.onClick}
                            >
                                { item.text }
                            </ButtonComponent>
                        </li>
                        
                    ))
                }   
            </div>        
        </div>
    );
}


const clickOutsideConfig = {
    handleClickOutside: () => DropDownMenuComponent.handleClickOutside
  };

export default onClickOutside(DropDownMenuComponent, clickOutsideConfig);