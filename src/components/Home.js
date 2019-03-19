import React, { PropTypes } from 'react';

const Home = (props) => {
    console.log(props);
    return(
        <div>
            <button onClick={() => props.history.push('/about')}>click me</button>
            Welcome to Home
        </div>
    )
}

export default Home;