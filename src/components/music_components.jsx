import React, { Component } from 'react';
import SongOne from './song-one';
import SongTwo from './song-two';



class MusicComponent extends Component {

    functions = (active, id) => {
        if (active === null) {
            return null;
        } else if ( active === id ) {
            return (
                <div className="wapper-body">
                        {(id === 1) ? <SongOne /> : <SongTwo />}
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        const {music, icon, fn, active} = this.props;
        return (
            <React.Fragment>
            <div className="music-column-wapper">
                <div className="wapper-head">
                    <div className="left">
                        <img src={music.img} title={music.title} className="div-img" alt={`${music.title} person`} />
                        <h4 className="title">{music.name}</h4>
                    </div>
                    <div className="right">
                    <span onClick={() => fn(music.id)} className="icon">{icon}</span>
                    </div>
                </div>
                { this.functions(active, music.id) }
                </div>
            </React.Fragment>
        );
    }
}
 
export default MusicComponent;