import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import routes from "../routes";
import NoMatch from '../components/NoMatch';

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Welcome to React SSR Boilerplate!",
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Header />
                <Switch>
                    {routes.map(route => <Route key={route.path} {...route} />)}
                    <Route path='*'>
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Layout;
