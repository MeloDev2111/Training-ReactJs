import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

import Home from "./components/index/Home";
import Clock from "./components/Clock/Clock";
import Counter from "./components/Counter/Counter";

export default function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/Clock">
               <Clock />
            </Route>
            <Route exact path="/Counter">
               <Counter />
            </Route>
         </Switch>
      </Router>
   );
}