import React, {Component} from 'react';
import './Home.css';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: "none",
            clickednew: "test",
        }
    }

    render() {
        return (
            <div className="app">
                <h1>Holiday</h1>
                <br/>
                {this.state.clicked}
                <p>{this.state.clickednew}</p>
                <br/>
            </div>
        );
    }
}

export default Home;
