import React, { useState } from 'react';
import { Modal, Input, Section, Link } from "."
import FB from "../images/icons/facebook.svg"
import IG from "../images/icons/instagram.svg"
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const sendData = (name, mail, phone, message) => {
    const db = getFirestore();
    addDoc(collection(db, 'questions'), {
        date: new Date,
        mail: mail,
        tel: phone,
        name: name,
        title: `wiadomość kontaktowa`,
        message: message
    })
}

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
                        <Input type="submit" value="Wyślij" onClick={() => sendData(Name, Mail, Phone, Message)} className="send-input contact-send" />
                    </div>
                </div>
                <Section className="contact-info">
                    <Section style={{ alignItems: 'flex-start' }}>
                        <h2>Zadzwoń!</h2>
                        <Link className="contact-link" to="tel:606220100" external>+48 606 220 100</Link>
                    </Section>
                    <Section>
                        <h2 style={{whiteSpace: 'nowrap'}}>Zostaw Nam e-mail!</h2>
                        <Link className="contact-link" to="mailto:biuro@archongroup.pl" external>biuro@archongroup.pl</Link>
                        <Link className="contact-link" to="mailto:media@archongroup.pl" external>media@archongroup.pl</Link>
                        <Link className="contact-link" to="mailto:kontakt@archongroup.pl" external>kontakt@archongroup.pl</Link>
                    </Section>
                    <Section style={{ alignItems: 'flex-start' }}>
                        <h2>Odwiedź Nas w Naszej Placówce</h2>
                        <Link className="contact-link" to="https://www.google.com/maps/place/Szpitalna+21,+44-194+Knur%C3%B3w" external target="_blank">44-194 Knurów</Link>
                        <Link className="contact-link" to="https://www.google.com/maps/place/Szpitalna+21,+44-194+Knur%C3%B3w" external target="_blank">ul.Szpitalna 21</Link>
                    </Section>
                    <Section className="footer-social contact-social">
                        <Link to="/" external target="_blank" className="social-button">
                            <img src={FB} alt="Facebook" />
                        </Link>
                        <Link to="/" external target="_blank" className="social-button">
                            <img src={IG} alt="Instagram" />
                        </Link>
                    </Section>
                </Section>
            </Section>
        </Modal>
    )
}

export default ContactModal
