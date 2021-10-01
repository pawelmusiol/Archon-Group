import React from "react"
import Logo from "../images/logo-archon.png"
import FB from "../images/facebook.svg"
import IG from "../images/instagram.svg"
import { Section, Link } from "./"
// mMMMmmmM st00pki

const Footer = () => {
    return (
        <footer>
            <Section row>
                <div className="section-row logo-address">
                    <div className="img-container">
                        <img src={Logo} className="logo footer-logo" alt="logo" />
                    </div>
                    <div className="section-column">
                        <Link external target="_blank" to="https://www.google.com/maps/place/Szpitalna+21,+44-194+Knur%C3%B3w">ul. Szpitalna 21</Link>
                        <Link external target="_blank" to="https://www.google.com/maps/place/Szpitalna+21,+44-194+Knur%C3%B3w">44-190 Knurów</Link>
                        <Link to="mailto:biuro@archogroup.pl">biuro@archogroup.pl</Link>
                        <Link to="tel:606220100">606 220 100</Link>
                    </div>
                </div>
                <div className="section-column">
                    <h2>Nasze usługi</h2>
                    <div className="section-column services-links">
                        <Link to="/uslugi/biuro-rachunkowe">biuro-rachunkowe</Link>
                        <Link to="/uslugi/ubezpieczenia">ubezpieczenia</Link>
                        <Link to="/uslugi/media">media</Link>
                        <Link to="/uslugi/finanse">finanse</Link>
                    </div>
                </div>
                <div className="footer-social section-column">
                    <h2>Obserwuj nas</h2>
                    <div className="section-row">
                        <Link to="/">
                            <img src={FB} alt="Facebook" />
                        </Link>
                        <Link to="/">
                        <img src={IG} alt="Instagram" />
                        </Link>
                    </div>
                </div>
            </Section>
        </footer>
    )
}

export default Footer