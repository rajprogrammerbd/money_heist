import React from 'react';
import './navbar.css';
import './responsive/responsive-nabar.css';

const Navbar = props => {
    return (
        <React.Fragment>
            <div className="wapper">
                <header>
                    <div className="top">
                        <div className="left">
                            <h2><a className="main-title" href="/">Money <span style={{ color: 'red' }}>Heist</span></a></h2>
                        </div>
                        <div className="right">
                            <ul>
                                {props.menu.map(menu => <li key={menu.id}><a href={menu.link} >{menu.name}</a></li>)}
                            </ul>
                            <img onClick={props.fn} src="./images/align-justify-solid.png" alt="unhover icon" />
                        </div>
                    </div>
                    <div className="bottom">
                        <h2>La Casa <span style={{ color: '#fff', backgroundColor: 'red', padding: '7px', fontSize: '20px', textAlign: 'center', marginLeft: "8px", marginRight: "8px" }}>de</span> Papel</h2>
                        <button>Getting Started</button>
                    </div>
                </header>
            </div>
        </React.Fragment>
    );
}

export default Navbar;