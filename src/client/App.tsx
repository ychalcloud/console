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

import Main from "../router/main";

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Root} />
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/register" component={Register} />
      <Route exact path="/auth/info" component={MyInfo} />
      <Route path="/main" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default App;
