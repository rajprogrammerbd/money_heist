import React, { Component } from 'react';
import MusicComponent from './music_components';
import './music.css';

class Music extends Component {
    state = {
        music: [
            { id: 1, name: "My Life Is Going On", img: "./images/CECİLİA-KRULL.jpg", title: "Cecilita Krull" },
            { id: 2, name: "Bella ciao", img: "./images/e5269795767342ecb02e0b2dc1076d5b_18.jpg", title: "Javier Gómez" }
        ],
        active: null,
        icon: "+"
    }

    show = num => {
        const active = this.state.active;
        if (active === parseInt(num)) return this.setState({ active: null });
        else this.setState({ active: num });
    }
    render() {
        const element = React.createRef();
        return (
            <React.Fragment>
                <div ref={element} className="container music-container" id="musics">
                    <div className="d-pos"></div>
                    <div className="wapper d-rel">
                        <div className="music-wapper">
                            <h3 className="title" >Music</h3>

                            {this.state.music.map(music => <MusicComponent icon={(this.state.active && this.state.active === music.id) ? "-" : this.state.icon} active={this.state.active} key={music.id} fn={this.show} music={music} />)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Music;