import React, { Component } from 'react';
import Navbar from './navbar';
import AboutHeist from './aboutHeist';
import StoryLine from './storyLine';
import Casts from './casts';
import Stream from './stream';
import Music from './music';
import Footer from './footer';
import './responsive/responsive-container.css';


class Home extends Component {

    state = {
        clickedMenu: { color: "#fff" },
        menu: [
            { id: 2, name: "About Series", link: "#about_series" },
            { id: 3, name: "Storyline", link: "#stories" },
            { id: 4, name: "Casts", link: "#casts" },
            { id: 5, name: "Music", link: "#musics" }
        ]
    }

    clickedHover = () => {
        const obj = { width: "100%", height: "100%", position: "fixed", zIndex: "100", backgroundColor: "red", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };
        this.setState({ clickedMenu: obj });
    }

    clickUnhoverd = () => {
        const obj = { display: "none" };
        this.setState({ clickedMenu: obj });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container relative header-container">
                    <div className="header-part"></div>
                    <Navbar fn={this.clickedHover} menu={this.state.menu} />
                </div>
                <AboutHeist />
                <StoryLine />
                <Casts />
                <Music />
                <Stream />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;