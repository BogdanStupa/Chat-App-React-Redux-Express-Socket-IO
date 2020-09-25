import React, { Component } from "react";
import { shalow } from "enzyme";

export default (Component) => {
    describe("Base test",() => {
        it("should pass through props to the component", () => {
            const customAttributeName = `data-test${Math.random()}`;
            const props = {
                [customAttributeName]: "foo"
            }
            const wrapper = shalow(<Component {...props}/>);
            expect(wrapper.first().props()[customAttributeName]).toEqual("foo");
        });
    });
} 