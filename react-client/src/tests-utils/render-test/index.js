import React from "react";
import { shallow } from "enzyme";


export default (name,Component) => {
    describe(`${name}it should be renderd`,() => { 
        const wrapper = shallow(Component);
        it("is defined", () => {
            expect(Component).toBeDefined();
        });
        it("renders the component", () => {
            expect(false).toEqual(wrapper.isEmptyRender());
        });
        it("matches the snapshots",() =>{
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    
}
