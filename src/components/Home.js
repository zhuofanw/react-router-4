import React, { PropTypes } from 'react';
import {withRouter} from 'react-router';
const Hello = (props) => {
    console.log(props);
    return (
        <div><button onClick={ () => props.history.push('/about') }>Hello</button></div>
    );
}
const WithRouterHello = withRouter(Hello);

const Home = (props) => {
    console.log(props);
    return(
        <div>
            <button onClick={() => props.history.push('/about')}>click me</button>
            Welcome to Home
            <WithRouterHello />
        </div>
    )
}

export default Home;