import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
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
                        <div className="mission-card">
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
                        <div className="mission-card">
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
                        <div className="mission-card">
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
            </section>

            <section className="portfolio-section">
                <div className="portfolio-container">
                    <div className="section-btn-wrapper">
                        <button className="section-btn">
                            <span className="dot"></span> Our Works
                        </button>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        navigation={true}
                        effect="fade"
                        speed={800}
                        loop={true}
                        className="portfolio-swiper"
                    >
                        <SwiperSlide>
                            <div className="swiper-card">
                                <div className="swiper-img-wrapper">
                                    <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Horizon-Finance-Rebrand-rlepr0g0cj26atggcx484i6v5a5q8uchkoxoy4kisg.avif" alt="Horizon Finance Rebrand" />
                                </div>
                                <div className="swiper-info-panel">
                                    <div className="info-col heading-col">
                                        <h3>Horizon Finance<br />Rebrand</h3>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Published Date</span>
                                        <p>December 2025</p>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Industry</span>
                                        <p>Fintech</p>
                                    </div>
                                    <div className="info-col services-col">
                                        <span className="label">Services</span>
                                        <p>Brand Identity, Creative Direction</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-card">
                                <div className="swiper-img-wrapper">
                                    <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Luma-Health-App-2-rlepr0g0cj26atggcx484i6v5a5q8uchkoxoy4kisg.avif" alt="Luma Health App" />
                                </div>
                                <div className="swiper-info-panel">
                                    <div className="info-col heading-col">
                                        <h3>Luma Health App</h3>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Published Date</span>
                                        <p>November 2025</p>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Industry</span>
                                        <p>Creative Agency</p>
                                    </div>
                                    <div className="info-col services-col">
                                        <span className="label">Services</span>
                                        <p>Web Design & Development</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-card">
                                <div className="swiper-img-wrapper">
                                    <img src="https://demo.7iquid.com/lighter/wp-content/uploads/elementor/thumbs/Northland-Studio-Website-rlepr0g0cj26atggcx484i6v5a5q8uchkoxoy4kisg.avif" alt="Northland Studio Website" />
                                </div>
                                <div className="swiper-info-panel">
                                    <div className="info-col heading-col">
                                        <h3>Northland Studio<br />Website</h3>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Published Date</span>
                                        <p>December 2025</p>
                                    </div>
                                    <div className="info-col">
                                        <span className="label">Industry</span>
                                        <p>Creative Agency</p>
                                    </div>
                                    <div className="info-col services-col">
                                        <span className="label">Services</span>
                                        <p>Web Design & Development</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="design-excellence-section">
                <div className="container">
                    <div className="section-btn-wrapper">
                        <button className="section-btn">
                            <span className="dot"></span> Awards
                        </button>
                    </div>
                    <div className="design-heading">
                        <h2>Recognized for Design<br />Excellence</h2>
                    </div>
                    <div className="design-content">
                        <div className="award-row">
                            <div className="award-name">
                                <p>The Webby Awards</p>
                            </div>
                            <div className="award-detail">
                                <p>Honoree — Best Visual Design</p>
                            </div>
                            <div className="award-date">
                                <p>May 2025</p>
                            </div>
                        </div>
                        <div className="award-row">
                            <div className="award-name">
                                <p>Awwwards</p>
                            </div>
                            <div className="award-detail">
                                <p>Site of the Day — Northland Studio Website</p>
                            </div>
                            <div className="award-date">
                                <p>February 2025</p>
                            </div>
                        </div>
                        <div className="award-row">
                            <div className="award-name">
                                <p>Communication Arts</p>
                            </div>
                            <div className="award-detail">
                                <p>Selected for the 2025 Design Annual</p>
                            </div>
                            <div className="award-date">
                                <p>January 2025</p>
                            </div>
                        </div>
                        <div className="award-row">
                            <div className="award-name">
                                <p>CSS Design Awards</p>
                            </div>
                            <div className="award-detail">
                                <p>Website of the Day — Luma Health App</p>
                            </div>
                            <div className="award-date">
                                <p>November 2024</p>
                            </div>
                        </div>
                        <div className="award-row">
                            <div className="award-name">
                                <p>Behance</p>
                            </div>
                            <div className="award-detail">
                                <p>Featured Project — Luma Health App UI/UX</p>
                            </div>
                            <div className="award-date">
                                <p>August 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;