import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="container footer-container">
                <div className="wapper">
                    <div className="footer-section">
                        <div className="left">
                            <h2><a href="/">Money<span>Heist</span></a></h2>
                        </div>
                        <div className="right">
                            <p>© Copyright 2020 The Movie - All rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Footer;