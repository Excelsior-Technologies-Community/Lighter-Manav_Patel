import React, { useState } from "react";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="header-one">
                <div className="header-content">
                    <div className="one-icon">
                        <i className="fa-solid fa-circle"></i>
                    </div>
                    <div className="one-text">
                        <h3>We Are Available For New Project</h3>
                    </div>
                </div>
            </header>
            <header className="header-two container">
                <div className="header-two-content">
                    <div className="header-img">
                        <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/11/MainLogo.png" alt="Logo" />
                    </div>
                    <div className="mega-menu">
                        <div className="dropdown">
                            <div className="dropdown-label">Home</div>
                            <ul className="dropdown-content">
                                <li>Creative Agency</li>
                                <li>Personal Portfolio</li>
                                <li>Marketing Agency</li>
                                <li>AI Creative Agency</li>
                            </ul>
                        </div>
                        <div className="dropdown-label">About</div>
                        <div className="dropdown-label">Services</div>
                        <div className="dropdown">
                            <div className="dropdown-label">Works</div>
                            <ul className="dropdown-content">
                                <li>Default</li>
                                <li>Portfolio Grid</li>
                            </ul>
                        </div>
                        <div className="dropdown-label">Pricing</div>
                        <div className="dropdown-label">Blog</div>
                    </div>
                    <div className="header-btn">
                        <button>Start a Project</button>
                    </div>

                    <div className="mobile-toggle" onClick={() => setIsMenuOpen(true)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="15" y1="3" x2="15" y2="21"></line>
                        </svg>
                    </div>
                </div>
            </header>

            <div className={`mobile-drawer-overlay ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(false)}></div>
            <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
                <div className="drawer-header">
                    <h2>Menu</h2>
                    <button className="drawer-close" onClick={() => setIsMenuOpen(false)}>Close</button>
                </div>
                <div className="drawer-content">
                    <div className="drawer-item">
                        <span>Home</span>
                        <span className="drawer-plus">+</span>
                    </div>
                    <div className="drawer-item active">
                        <span>About</span>
                    </div>
                    <div className="drawer-item">
                        <span>Services</span>
                    </div>
                    <div className="drawer-item">
                        <span>Works</span>
                        <span className="drawer-plus">+</span>
                    </div>
                    <div className="drawer-item">
                        <span>Pricing</span>
                    </div>
                    <div className="drawer-item">
                        <span>Blog</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;