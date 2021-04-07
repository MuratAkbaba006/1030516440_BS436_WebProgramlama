import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Game } from './Game';
import Home from './Home';
import NotFound from './NotFound';


class App extends Component{
    render()
    {
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/Game" component={Game}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));












