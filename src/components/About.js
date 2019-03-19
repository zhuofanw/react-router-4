import React, {PropTypes} from 'react';
import { Prompt } from 'react-router-dom';
class About extends React.Component {
    state = {
        name: ""
    }

    render() {
        return (
            <div>
                About Page
                <Prompt
                    when={ !!this.state.name }
                    message = "Do you want to leave?"
                />
                <div>
                    <input
                        value = {this.state.name}
                        type="text"
                        onChange={ e => this.setState({name: e.target.value})}
                    />
                </div>
            </div>
        )
    }
}


export default About;