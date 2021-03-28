import React, { Component } from 'react';
import './storyLine.css';
import Season01 from './season-01';
import Season02 from './season-02';
import Season03 from './season-03';
import Season04 from './season-04';

class StoryLine extends Component {
    state = {
        season: 1,
        allSeason: [{ name: "Season 01", value: 1 }, { name: "Season 02", value: 2 }, { name: "Season 03", value: 3 }, { name: "Season 04", value: 4 }]
    }

    seasonCheck = () => {
        const season = this.state.season;
        if (season === 1) return <Season01 />;
        else if (season === 2) return <Season02 />;
        else if (season === 3) return <Season03 />
        else if (season === 4) return <Season04 />;
        else return undefined;
    }

    seasonChanged = val => {
        if (!isNaN(val)) {
            this.setState({ season: val });
        } else {
            throw new Error('Not a Number');
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container" style={{ borderBottom: "1px solid #ddd" }} id="stories">
                    <div className="wapper">
                        <div className="s-l">
                            <h2>StoryLine</h2>
                            <div className="stories">
                                <div className="top">
                                    <ul>
                                        {this.state.allSeason.map(obj => <li key={obj.value} className={(this.state.season === obj.value) ? "item active" : "item"} onClick={() => this.seasonChanged(obj.value)} >{obj.name}</li>)}
                                    </ul>
                                </div>
                                <div className="bottom">
                                    {this.seasonCheck()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default StoryLine;