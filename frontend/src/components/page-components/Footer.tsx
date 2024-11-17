import React from 'react';
import '../../assets/css/main.css'; // Opravená cesta k CSS

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h2>Kontakt.</h2>
                <p>Máte nějaký nápad na váš úžasný projekt? Kontaktujte mě a spolu uděláme něco úžasného!</p>
                <a href="mailto:designbydaniel1@gmail.com" className="email-button">E - M A I L</a>
                <div className="footer-credits">
                    <p>D4N13L. Design. 2021 | Style by <a href="https://www.style.shout.com" target="_blank" rel="noopener noreferrer">StyleShout</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
