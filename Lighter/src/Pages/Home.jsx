import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="Building-Section">
                <div className="container hero-container">
                    <div className="Building-Content">
                        <h1 className='big'>Building Better</h1>
                        <div className="product-editing-area">
                            <div className="selection-box">
                                <h2 className="Product-big">Products</h2>
                                <span className="node top-left"></span>
                                <span className="node top-right"></span>
                                <span className="node bottom-left"></span>
                                <span className="node bottom-right"></span>
                            </div>
                            <div className="cursor-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2026/01/cursor.png" alt="Cursor" />
                            </div>
                            <div className="creative">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2026/01/button.png" alt="Creative" />
                            </div>
                        </div>
                        <div className="background-img">
                            <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/11/glass-logo.png" alt="Background" />
                            <div className="background-overlay-one float-icon-1">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/11/404Image02.png" alt="Overlay 1" />
                            </div>
                            <div className="background-overlay-two float-icon-2">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/12/1.png" alt="Overlay 2" />
                            </div>
                        </div>
                    </div>
                    <div className="hero-right-content">
                        <div className="building-rating">
                            <div className="rating-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/12/Frame-29.png" alt="Rating" />
                            </div>
                            <div className="rating-start">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className='review'>
                                BASED ON <span>230 REVIEWS</span>
                            </div>
                            <p className="hero-description">
                                We craft bold, strategy-driven designs that help businesses stand out and connect with their audiences.
                            </p>
                        </div>
                        <div className="video-wrapper" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                            <video
                                src="https://api.7iquid.com/video/lighter/lighterVideo04.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Mission-Section">
                <div className="mission-container">
                    <div className="mission-one">
                        <div className="mission-button text-start">
                            <button className="mission-btn">Our Services</button>
                        </div>
                        <div className="mission-heading text-end">
                            <h2>Our mission is to shape meaningful <br />brands and experiences</h2>
                            <div className="small-img">
                                <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/12/Group-110.png" alt="Small" />
                            </div>
                            <h2>that<br />
                                make an impact.</h2>
                            <div className="header-btn">
                                <button>Start a Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="mission-two">
                        <div className="mission-card">
                            <div className="card-background">
                                <img src='https://demo.7iquid.com/lighter/wp-content/themes/lighter/assets/images/pixels.png' alt="Card Background" />
                                <div className="mission-uppar">
                                    <div className="mission-icon">
                                        <i class="fa-solid fa-paintbrush"></i>
                                    </div>
                                    <div className="mission-text">
                                        Define. Design.<br />
                                        Distinguish.
                                    </div>
                                </div>
                                <div className="main-text">
                                    <h1>Branding & <br />
                                        Strategy</h1>
                                </div>
                                <div className="big-number">
                                    <h1>01.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mission-card">
                            <div className="card-background">
                                <img src='https://demo.7iquid.com/lighter/wp-content/themes/lighter/assets/images/pixels.png' alt="Card Background" />
                                <div className="mission-uppar">
                                    <div className="mission-icon">
                                        <i class="fa-solid fa-desktop"></i>
                                    </div>
                                    <div className="mission-text">
                                        Intuitive. Engaging.<br />
                                        Seamless.
                                    </div>
                                </div>
                                <div className="main-text">
                                    <h1>UI/UX <br />
                                        Design</h1>
                                </div>
                                <div className="big-number">
                                    <h1>02.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mission-card">
                            <div className="card-background">
                                <img src='https://demo.7iquid.com/lighter/wp-content/themes/lighter/assets/images/pixels.png' alt="Card Background" />
                                <div className="mission-uppar">
                                    <div className="mission-icon">
                                        <i class="fa-regular fa-lightbulb"></i>
                                    </div>
                                    <div className="mission-text">
                                        Vision. Style.<br />
                                        Impact.
                                    </div>
                                </div>
                                <div className="main-text">
                                    <h1>Creative <br />
                                        Direction</h1>
                                </div>
                                <div className="big-number">
                                    <h1>03.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mission-card">
                            <div className="card-background">
                                <img src='https://demo.7iquid.com/lighter/wp-content/themes/lighter/assets/images/pixels.png' alt="Card Background" />
                                <div className="mission-uppar">
                                    <div className="mission-icon">
                                        <i class="fa-solid fa-earth-asia"></i>
                                    </div>
                                    <div className="mission-text">
                                        Beautiful. Functional.<br />
                                        Fast.
                                    </div>
                                </div>
                                <div className="main-text">
                                    <h1>Web<br />
                                        Development</h1>
                                </div>
                                <div className="big-number">
                                    <h1>04.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Home;