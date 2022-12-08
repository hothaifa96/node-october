import React from "react";
import { Route, Switch } from "react-router-dom";
import Hello from './hello';
import Movies from './movies';
import CountersList from './app';

const Main = () => {
    return ( 
        <React.Fragment>
            <Switch>
                <Route path="/Movies" component={Movies} />
                <Route path="/Counter" component={CountersList} />
                <Route path="/"  component={Hello} />
            </Switch>
        </React.Fragment>
     );
}
 
export default Main;