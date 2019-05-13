import React, {Component} from 'react';
import './App.css';
import Home from "./pages/Home";
import Video from "./pages/Video";
import Galery from "./pages/Galery";
import Report from "./pages/Report";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: <Home/>,
            nav: "homenav",
        };

        this.showHome = this.showHome.bind(this);
        this.showVideo = this.showVideo.bind(this);
        this.showGalery = this.showGalery.bind(this);
        this.showReport = this.showReport.bind(this);
    }

    showHome() {
        this.setState({
            page: <Home/>,
            nav: "homenav",
        })
    }

    showVideo() {
        this.setState({
            page: <Video/>,
            nav: "othernav",
        })
    }

    showGalery() {
        this.setState({
            page: <Galery/>,
            nav: "othernav",
        })
    }

    showReport() {
        this.setState({
            page: <Report/>,
            nav: "othernav",
        })
    }

    render() {
        return (
            <div id="App">
                {this.state.page}
                <div id={this.state.nav}>
                    <div id="home">
                        <a onClick={this.showHome}><p>Home</p></a>
                    </div>
                    <div id="video">
                        <a onClick={this.showVideo}><button>Video</button></a>
                    </div>
                    <div id="galery">
                        <a onClick={this.showGalery}><p>Galerie</p></a>
                    </div>
                    <div id="report">
                        <a onClick={this.showReport}><p>Bericht</p></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
