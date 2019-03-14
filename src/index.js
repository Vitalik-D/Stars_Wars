import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Films from "./component/film/Films";
import Planets from "./component/planets/Planets";
import People from "./component/people/People";
import Species from "./component/species/Species";
import Vehicles from "./component/Vehicles/Vehicles";
import Starships from "./component/starship/Starships";
import PageNotFound from "./component/pageNotFound/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => (
    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/films" component={Films} />
            <Route path="/planets" component={Planets} />
            <Route path="/people" component={People} />
            <Route path="/species" component={Species} />
            <Route path="/vehicles" component={Vehicles} />
            <Route path="/starships" component={Starships} />
            <Route render={PageNotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(

    <Root />,

    document.getElementById('root'
    ));


serviceWorker.unregister();
