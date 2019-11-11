import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import PageNotFound from "./component/pages/pageNotFound/PageNotFound";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Page from "./component/pages/global/GlobalPage";
import Footer from "./component/other/footer/Footer";
import PageOne from "./component/pages/global/GlobalOnePage";

const Root = () => (
  <>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/films" component={Page} />
        <Route path="/films/" component={PageOne} />
        <Route exact path="/planets" component={Page} />
        <Route path="/planets/" component={PageOne} />
        <Route exact path="/people" component={Page} />
        <Route path="/people/" component={PageOne} />
        <Route exact path="/species" component={Page} />
        <Route path="/species/" component={PageOne} />
        <Route exact path="/vehicles" component={Page} />
        <Route path="/vehicles/" component={PageOne} />
        <Route exact path="/starships" component={Page} />
        <Route path="/starships/" component={PageOne} />

        <Route render={PageNotFound} />
      </Switch>
    </Router>
    <Footer />
  </>
);

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Root />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
