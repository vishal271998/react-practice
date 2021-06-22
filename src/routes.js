
import React from "react";
import { Route, Switch} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/counter";
import Contact from "./components/Contact";
import UserListAPI from "./components/api/UserListAPI";
import SearchComponent from "./components/SearchComponent";
import StateComponent from "./components/StateComponent";

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
                <Counter name={'testing props'}/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/users">
                <UserListAPI/>
            </Route>
            {/*<Route path="/search-suggestion">*/}
            {/*    <SearchComponent />*/}
            {/*</Route>*/}
            <Route path="/state-example">
                {/*<StateComponent type={'props'}  name={'vishal'} email={'vishal@gmail.com'} age={'23'}/>*/}
                <StateComponent />
            </Route>
        </Switch>
   </div>
}