import React from "react";
import {
    SignUpEntry,
    SignInEntry,
    ChatEntry
} from "entries";
import { AppContainer} from "shared/containers";
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";



function RoutesContainer({ location }){
    return (
        <AppContainer>
            <section className="route-section">
                <Switch location={location}>
                    <Route
                        path="/signin"
                        component={SignInEntry}
                        exact
                    />
                    <Route
                        path="/signup"
                        component={SignUpEntry}
                        exact
                    />
                    <Route
                        path="/"
                        component={ChatEntry}
                        exact
                    />
                </Switch>
            </section>
        </AppContainer>
    );
}

export default withRouter(RoutesContainer);