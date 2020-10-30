import React from "react";
import {
    SignUpEntry,
    SignInEntry,
    ChatEntry
} from "entries";
import { 
    AppContainer, 
    PrivateRoute
} from "shared/containers";
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";


const RoutesContainer = ({ location }) => {
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
                    <PrivateRoute exact path="/">
                        <ChatEntry/>
                    </PrivateRoute>
                </Switch>
            </section>
        </AppContainer>
    );
}

export default withRouter(RoutesContainer);