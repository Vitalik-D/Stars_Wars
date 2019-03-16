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
import OneFilms from "./component/film/OneFilm";
import OnePeople from "./component/people/OnePeople";
import OneSpecies from "./component/species/OneSpecies";
import OneVehicles from "./component/Vehicles/OneVehicles";
import OneStarships from "./component/starship/OneStarships";
import OnePlanets from "./component/planets/OnePlanets";
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Root />
    </BrowserRouter>,
    document.getElementById('root'
    ));


serviceWorker.unregister();
