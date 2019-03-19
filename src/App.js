import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, NavLink, Switch, Link, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Vip from './components/Vip';
import NoMatch from './components/NoMatch';
import queryString from 'query-string';

const User = (props) => {
    const params = new URLSearchParams(props.location.search);
    console.log(props);
    const value = queryString.parse(props.location.search);
    console.log(value.a);
    return (
        <div>
            User {props.match.params.id}
        </div>
    );
}
// const MenuLink = ({children, to, exact}) => {
//     console.log(children);
//
//     const match = window.location.pathname === to
//     return(
//         <NavLink activeStyle={ match ? {color: 'green'} : {}} to={to}>
//             { match ? '>' : ''} {children}
//         </NavLink>
//     )
// }

const MenuLink = ({children, to, exact}) => {
    console.log(children);
    return(
        <Route path={to} exact={ exact } children={ ({match}) => (
            <NavLink activeStyle={ match ? {color: 'green'} : {}} to={to}>
                { match ? '>' : ''} {children}
            </NavLink>
        )} />
    )
}

class App extends Component {
    handleClick = (e) => {
        console.log('click');
    }
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
                                <MenuLink exact = {true} to="/">
                                    Home
                                </MenuLink>
                            </li>

                            <li>
                                <MenuLink exact = {true} to="/about">
                                    About
                                </MenuLink>
                            </li>
                            <li>
                                <MenuLink exact = {true} to="/error">
                                    Error
                                </MenuLink>
                            </li>
                            <li>
                                <MenuLink exact = {true} to="/users/rails365">
                                    Rails365
                                </MenuLink>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/users/rails365',
                                    search: '?a=b',
                                    state: { fromDashboard:true}
                                }}>
                                    pro
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <button onClick={() => this.handleClick()}>push</button>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/vip" component={Vip}/>
                        <Route path="/users/profile/:id" component={User}/>
                        <Redirect from="/users/:id" to="/users/profile/:id" />
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
