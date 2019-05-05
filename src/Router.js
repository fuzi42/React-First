import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Movies from './Movies';
import Article from './Article';
import Content from './Content';
import Music from './Music'
const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/article" component={Article}/>
            <Route path="/content" component={Content}/>
            <Route path="/music" component={Music}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;
