import React from 'react';

const Home = () => {
    return (
        <section className="Building-Section">
            <div className="container hero-container">
                <div className="Building-Content">
                    <h1>Building Better</h1>
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
                            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;