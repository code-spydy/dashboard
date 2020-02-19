import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MemberForm from "./Forms/MemberForm";
import Index from './index'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
       <Route path="/index" render={props => <Index {...props} />} />
       <Route
        path="/member-form"
        render={props => <MemberForm {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
