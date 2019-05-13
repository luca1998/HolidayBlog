import React, {Component} from 'react';
import {Player} from 'video-react';
import Testvideo from '../ressources/athen.mp4';

class Video extends Component {

    render() {
        return (
            <div>
                <link
                    rel="stylesheet"
                    href="https://video-react.github.io/assets/video-react.css"
                />

                <h1>Video</h1>

                <hr/>

                <h5>Testvideo</h5>

                <div className="video">
                    <Player>
                        <source src={Testvideo}/>
                    </Player>
                </div>
            </div>
        );
    }

}

export default Video;
