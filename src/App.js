import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, NavLink, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Vip from './components/Vip';
import NoMatch from './components/NoMatch';
import queryString from 'query-string';

const User = (props) => {
    const params = new URLSearchParams(props.location.search);
    console.log(params.get("name"));
    console.log(params.get("a"));
    const value = queryString.parse(props.location.search);
    console.log(value.name);
    console.log(value.a);
    return (
        <div>
            User {props.match.params.id}
        </div>
    );
}

class App extends Component {
    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <div className="App-intro">
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    activeStyle={{
                                        color: "green"
                                    }}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    exact
                                    to="/about"
                                    activeStyle={{
                                        color: "green"
                                    }}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    exact
                                    to="/error"
                                    activeStyle={{
                                        color: "green"
                                    }}>
                                    Error
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    exact
                                    to="/users/rails365"
                                    activeStyle={{
                                        color: "green"
                                    }}>
                                    Rails365
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/vip" component={Vip}/>
                        <Route path="/users/:id" component={User}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
