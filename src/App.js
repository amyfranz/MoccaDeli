import React from "react";
import { Route, withRouter, Redirect, Switch } from "react-router-dom";

import Home from "./containers/Home";
import Products from "./containers/Products";
import Blog from "./containers/Blog";
import Story from "./containers/Story";
import ContactUs from "./containers/ContactUs";
import Nav from "./containers/Nav/Nav";
import Footer from "./containers/Footer";

function App(props) {
  return (
    <div>
      <Nav history={props.history} />
      <Switch>
        <Route exact path={`/`} render={(routerProps) => <Home />} />
        <Route
          exact
          path={`/products`}
          render={(routerProps) => <Products />}
        />
        <Route exact path={`/blog`} render={(routerProps) => <Blog />} />
        <Route exact path={`/our_story`} render={(routerProps) => <Story />} />
        <Route
          exact
          path={`/contact_us`}
          render={(routerProps) => <ContactUs />}
        />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
