import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Home } from '../Components/Home';
import {Questions} from '../Components/Questions'
import { Result } from '../Components/Result';

export const ReactRouter = () =>{

return (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/questions" exact>
                <Questions/>
            </Route>
            <Route path="/result" exact>
                <Result/>
            </Route>
        </Switch>
    </Router>
)
}