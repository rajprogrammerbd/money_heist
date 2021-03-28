import React from 'react';
import './casts.css';

const Casts = () => {
    return (
        <React.Fragment>
            <div className="container" style={{ borderBottom: "1px solid #ddd" }} id="casts">
                <div className="wapper">
                    <div className="main-cast">
                        <h3 className="main-cast-title">Casts's</h3>
                        <div className="wrap-container">
                            <div className="element">
                                <div className="image-wapper">
                                    <img src="./images/90f20eff95f277c0d1152cecd1d07cc3.jpg" alt="" />
                                </div>
                                <div className="wrap">
                                    <h3><a href="https://en.wikipedia.org/wiki/%C3%81lvaro_Morte">Álvaro Morte</a></h3>
                                    <small>Character Name: El Profesor</small>
                                    <p>Álvaro Antonio García Morte, known professionally as Álvaro Morte. He gained worldwide recognition playing the role of Sergio "El Profesor" Marquina in the Spanish heist series Money Heist. <a href="https://en.wikipedia.org/wiki/%C3%81lvaro_Morte">More</a></p>
                                </div>
                            </div>
                            <div className="element">
                                <div className="image-wapper">
                                    <img src="./images/money_heist_jpg.jpg" alt="" />
                                </div>
                                <div className="wrap">
                                    <h3><a href="https://en.wikipedia.org/wiki/Itziar_Itu%C3%B1o">Itziar Ituño</a></h3>
                                    <small>Character Name: Raquel Murillo</small>
                                    <p>Itziar Ituño Martínez (born June 18, 1974) is a Spanish actress. She is best known for her role as Inspector Raquel Murillo in the Spanish television series Money Heist (La casa de papel). <a href="https://en.wikipedia.org/wiki/Itziar_Itu%C3%B1o">More</a></p>
                                </div>
                            </div>
                            <div className="element">
                                <div className="image-wapper">
                                    <img src="./images/ursula-corbero.png" alt="" />
                                </div>
                                <div className="wrap">
                                    <h3><a href="https://en.wikipedia.org/wiki/%C3%9Arsula_Corber%C3%B3">Úrsula Corberó</a></h3>
                                    <small>Character Name: Tokyo</small>
                                    <p>Margarita de Austria in the Televisión Española television series Isabel (2014). She gained international fame thanks to her role of Tokyo in the heist series La Casa de Papel (Money Heist) (2017–2020). <a href="https://en.wikipedia.org/wiki/%C3%9Arsula_Corber%C3%B3">More</a></p>
                                </div>
                            </div>
                            <div className="element">
                                <div className="image-wapper">
                                    <img src="./images/feature-1576569328070.jpg" alt="" />
                                </div>
                                <div className="wrap">
                                    <h3><a href="https://en.wikipedia.org/wiki/Jaime_Lorente">Jaime Lorente</a></h3>
                                    <small>Character Name: Denver</small>
                                    <p>Jaime Lorente López (born December 12, 1991), known professionally as Jaime Lorente. He is best known for playing the roles of Daniel "Denver" Ramos in La casa de papel and Fernando "Nano" García Domínguez in Élite. <a href="https://en.wikipedia.org/wiki/Jaime_Lorente">More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Casts;