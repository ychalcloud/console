import * as React from "react";
import ServiceWrapper2 from "../components/ServiceWrapper2";
import { Route } from "react-router";
import { Billing, Dashboard, Instance } from "../pages";

export default ({ match }: { match: { path: string } }) => {
    console.log(match.path)
  return (
    <ServiceWrapper2>
      <Route exact path={`${match.path}/dashboard`} component={Dashboard} />
      <Route exact path={`${match.path}/instance`} component={Instance} />
      <Route exact path={`${match.path}/billing`} component={Billing} />
    </ServiceWrapper2>
  );
};
