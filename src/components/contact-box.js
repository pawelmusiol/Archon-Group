import React, { useState } from 'react';
import { Link, CommisionModal } from '.'

const ContactBox = () => {
    const [ModalOpen, setModalOpen] = useState(false)
    return (
        <div className="contact-box">
                <h1>Zleć Projekt</h1>
                <p>Lorem ipsum dolor sit amet con et connex. dolor sit amet con et connex</p>
            <Link className="landing-button" style={{width:"fit-content"}} onClick={() => setModalOpen(true)}>Zleć Projekt</Link>
            {ModalOpen &&
                <CommisionModal close={() => setModalOpen(false)} />
            }
        </div>
    )
}

export default ContactBox