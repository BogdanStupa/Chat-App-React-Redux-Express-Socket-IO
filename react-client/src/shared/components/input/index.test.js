import React from "react";
import { InputFormComponent } from "shared/components";
import { shallow } from  "enzyme";
import { componentCheckOnRender } from "tests-utils";

describe("<InputFormCamponent/>:", () =>{
    componentCheckOnRender("InputFormComponent", <InputFormComponent />);

    describe("is working correctly",() => {
        const onChange = jest.fn();
        const errors = "test error";
        const modelI = {
            type:"text",
            isFetching: false,
            onChange
        };
        const modelII = {
            type:"text",
            isFetching: false,
            onChange,
            errors
        }
        const modelIII = {
            type:"text",
            isFetching: true,
            onChange,
        };
        const getWrapper = model => {
            return shallow(<InputFormComponent { ...model }/>);
        };

        it("has input component", () => {
            const wrapper = getWrapper(modelI);
            expect(wrapper.find("input").length).toBe(1);
        });
        
        it("has an error component, where errors is defined", () => {
            const wrapper = getWrapper(modelII);
            expect(wrapper.find(".error-info").length).toBe(1);
        });

        it("has no error component, where no error", () => {
            const wrapper = getWrapper(modelI);
            expect(wrapper.find(".error-info").length).toBe(0);
        });

        it("correctly working onChange",() => {
            const wrapper = getWrapper(modelI);
            wrapper.find("input").simulate("change");
            expect(onChange).toHaveBeenCalled();
        });
    });
});
