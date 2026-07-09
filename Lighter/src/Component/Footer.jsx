import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-col branding">
                    <img src="https://demo.7iquid.com/lighter/wp-content/uploads/2025/11/MainLogo.png" alt="Lighter Logo" className="footer-logo" />
                    <p className="footer-desc">We're a team of curious minds and visual<br />storytellers</p>
                </div>
                <div className="footer-col inquiries">
                    <h4 className="footer-heading">WORK INQUIRIES</h4>
                    <ul className="footer-list">
                        <li><i className="fa-solid fa-envelope"></i> infor@thelighter.com</li>
                        <li><i className="fa-solid fa-phone-volume"></i> (+1) 234 5678-9100</li>
                    </ul>
                </div>
                <div className="footer-col nav">
                    <h4 className="footer-heading">NAVIGATION</h4>
                    <ul className="footer-list">
                        <li>About</li>
                        <li>Services</li>
                        <li>Works</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="footer-col socials">
                    <h4 className="footer-heading">SOCIALS</h4>
                    <ul className="footer-list">
                        <li>Instagram</li>
                        <li>Linkedin</li>
                        <li>Behance</li>
                        <li>Dribbble</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <div className="copyright">
                        © 2026 Lighter. All rights reserved
                    </div>
                    <div className="back-to-top">
                        Back to Top <i className="fa-solid fa-angle-up"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
