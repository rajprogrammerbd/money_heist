import React from 'react';
import './aboutHeist.css';
import './responsive/responsive-heist.css';

const AboutHeist = () => {
    return (
        <React.Fragment>
            <div className="container a-h" id="about_series">
                <div className="wapper">
                    <div className="total_wap">
                        <div className="left">
                            <h2>About Money Heist &rarr;</h2>
                            <p>Money Heist (Spanish: La casa de papel, transl. The House of Paper) is a Spanish television heist crime drama series. Created by Álex Pina, the series was initially intended as a limited series to be told in two parts. It had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. Netflix acquired global streaming rights in late 2017. <a href="/">See More</a></p>
                        </div>
                        <div className="right">
                            <img src="./images/money-heist-season-5.jpg" alt="Money heist" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AboutHeist;