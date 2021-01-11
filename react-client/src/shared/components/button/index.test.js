import React from "react";
import { ButtonComponent } from "shared/components";
import { shallow } from "enzyme";
import { componentCheckOnRender } from "tests-utils";
import { getByText, render } from '@testing-library/react';



describe("<ButtonComponent />:", () => { 
    componentCheckOnRender("ButtonComponent",<ButtonComponent/>);
    
    describe("should working correctly:", () => {
        const onButtonClick = jest.fn();
        const modelI = {
            text: "testeButton",
            type: "submit",
            isFetching: false,
            onClick: onButtonClick
        };
        const modelII = {
            text: "testeButton",
            type: "submit",
            isFetching: true,
            onClick: onButtonClick
        };
        const getWrapper = (model) => {
            return shallow(<ButtonComponent { ...model } />)  
        };

        it("has a button component", () => {
            const wrapper = getWrapper(modelI);
            expect(wrapper.find("button").length).toBe(1);
        });

        it("has (loading) whith isFetching === true, show loading",() => {
            const wrapper = getWrapper(modelII);
            expect(wrapper.text()).toEqual("loading");
        });

        it("has no (loading) with isFetching === false, show text",() => {
            const wrapper = getWrapper(modelI);
            expect(wrapper.text()).toEqual(modelI.text);
        });

        it("onClick button is working",() => {
            const wrapper = getWrapper(modelI);
            wrapper.simulate("click");
            expect(onButtonClick).toHaveBeenCalledTimes(1);
        });
    
    });
});