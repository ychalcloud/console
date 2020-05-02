import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {
  Root,
  Login,
  Register,
  Billing,
  Instance,
  MyInfo,
  Dashboard
} from "../pages";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/register" component={Register} />
      <Route exact path="/auth/info" component={MyInfo} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/instance" component={Instance} />
      <Route exact path="/billing" component={Billing} />
    </Switch>
  </BrowserRouter>
);

export default App;
