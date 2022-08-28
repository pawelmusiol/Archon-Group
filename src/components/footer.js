import React from "react"
import Logo from "../images/logo-white.png"
import FB from "../images/icons/facebook.svg"
import IG from "../images/icons/instagram.svg"
import { Section, Link } from "./"
// mMMMmmmM st00pki

const Footer = () => {
    return (
        <footer>
            <Section row className="footer-container">
                <div className="section-row logo-address">
                    <div className="img-container">
                        <img src={Logo} className="logo footer-logo" alt="logo" />
                    </div>
                    <div className="section-column">
                        <Link to="tel:606220100">+48 606 220 100</Link>
                        <Link external target="_blank" to="https://www.google.com/maps/place/Szpitalna+21,+44-194+Knur%C3%B3w">ul. Szpitalna 21</Link>
                        <Link external target="_blank" to="https://www.google.com/maps/place/Szpitalna+21,+44-194+Knur%C3%B3w">44-194 Knurów</Link>
                    </div>
                </div>
                <div className="section-column">
                    <Link to="/uslugi/biuro-rachunkowe">biuro rachunkowe</Link>
                    <Link to="/uslugi/ubezpieczenia">ubezpieczenia</Link>
                    <Link to="/uslugi/media">media</Link>
                    <Link to="/polityka-prywatnosci">polityka prywatności</Link>
                    {/* <Link to="/uslugi/finanse">finanse</Link> */}
                </div>
                <div className="footer-social section-column">
                    <div className="section-column" style={{ alignItems: 'flex-start' }}>
                        <Section row>
                            <Link to="/">
                                <img src={FB} alt="Facebook" />
                            </Link>
                            <p>Facebook/Archon Group</p>
                        </Section>
                        <Section row style={{ marginLeft: 0 }}>
                            <Link to="/">
                                <img src={IG} alt="Instagram" />
                            </Link>
                            <p>@archongroup_pl</p>
                        </Section>
                    </div>
                </div>
            </Section>
        </footer>
    )
}

export default Footer