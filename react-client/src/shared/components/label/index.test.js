import React from "react";
import { LabelComponent } from "shared/components";
import { shallow } from "enzyme";
import { componentCheckOnRender } from "tests-utils";


describe("<LabelCompenent />", () => {
    componentCheckOnRender("LabelCompenent", <LabelComponent/>);
});