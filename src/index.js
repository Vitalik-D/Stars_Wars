import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Films from "./component/pages/film/Films";
import Planets from "./component/pages/planets/Planets";
import People from "./component/pages/people/People";
import Species from "./component/pages/species/Species";
import Vehicles from "./component/pages/Vehicles/Vehicles";
import Starships from "./component/pages/starship/Starships";
import PageNotFound from "./component/other/pageNotFound/PageNotFound";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OneFilms from "./component/pages/film/OneFilm";
import OnePeople from "./component/pages/people/OnePeople";
import OneSpecies from "./component/pages/species/OneSpecies";
import OneVehicles from "./component/pages/Vehicles/OneVehicles";
import OneStarships from "./component/pages/starship/OneStarships";
import OnePlanets from "./component/pages/planets/OnePlanets";
import { HashRouter } from 'react-router-dom';

const Root = () => (

    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/films" component={Films} />
            <Route path="/films/" component={OneFilms} />
            <Route exact path="/planets" component={Planets} />
            <Route path="/planets/" component={OnePlanets} />
            <Route exact path="/people" component={People} />
            <Route path="/people/" component={OnePeople} />
            <Route exact path="/species" component={Species} />
            <Route path="/species/" component={OneSpecies} />
            <Route exact path="/vehicles" component={Vehicles} />
            <Route path="/vehicles/" component={OneVehicles} />
            <Route exact path="/starships" component={Starships} />
            <Route path="/starships/" component={OneStarships} />
            <Route render={PageNotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
    <Root />
    </HashRouter>,
    document.getElementById('root'
    ));


serviceWorker.unregister();
