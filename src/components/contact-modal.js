import React, { useState } from 'react';
import { Modal, Input, Section, Link } from "."
import FB from "../images/facebook.svg"
import IG from "../images/instagram.svg"

const ContactModal = ({ close }) => {

    const [Name, setName] = useState("")
    const [Mail, setMail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Message, setMessage] = useState("")

    return (
        <Modal className="contact-modal" Close={close} noClose index={3} style={{ maxWidth: "600px" }} >
            <Section row className="contact-section">
                <div>
                    <div className="modal-inputs" style={{ width: "100%" }}>
                        <Input type="text" placeholder="Imię" value={Name} setValue={setName} />
                        <Input type="email" placeholder="Mail" value={Mail} setValue={setMail} />
                        <Input type="tel" placeholder="Telefon" value={Phone} setValue={setPhone} />
                        <Input textarea value={Message} setValue={setMessage} placeholder="Wiadomość" rows={6} />
                    </div>
                    <div className="modal-inputs send">
                        <Input type="submit" value="Zaloguj się" onClick={() => { }} className="send-input" />
                    </div>
                </div>
                <Section className="contact-info">
                    <h1>Napisz do nas</h1>
                    <Section style={{alignItems: 'flex-start'}}>
                        <Link className="contact-link" to="mailto:biuro@archongroup.pl" external>biuro@archongroup.pl</Link>
                        <Link className="contact-link" to="tel:606220100" external>606220100</Link>
                    </Section>
                    <Section style={{alignItems: 'flex-start'}}>
                        <Link className="contact-link" to="https://www.google.com/maps/place/Szpitalna+21,+44-194+Knur%C3%B3w" external target="_blank">ul.Szpitalna 21</Link>
                        <Link className="contact-link" to="https://www.google.com/maps/place/Szpitalna+21,+44-194+Knur%C3%B3w" external target="_blank">44-190 Knurów</Link>
                    </Section>
                    <Section className="footer-social">
                        <Link to="/" external target="_blank" className="social-button">
                            <Section row>
                                <img src={FB} alt="Facebook" />
                                <p>Facebook</p>
                            </Section>
                        </Link>
                        <Link to="/" external target="_blank" className="social-button">
                            <Section row>
                                <img src={IG} alt="Instagram" />
                                <p>Instagram</p>
                            </Section>
                        </Link>
                    </Section>
                </Section>
            </Section>
        </Modal>
    )
}

export default ContactModal
