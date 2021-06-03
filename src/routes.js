
import React from "react";
import { Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/counter";
import Contact from "./components/Contact";

export default function Routes() {
   return <div>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route path="/about/:parameter">
                <About />
            </Route>
            <Route path="/counter">
                <Counter/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
        </Switch>
   </div>
}