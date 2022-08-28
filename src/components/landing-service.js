import React, { useState } from 'react'
import { Scroll, Link, CommisionModal } from "."

const LandingService = ({ children, text, title, modal, right }) => {
    const [ModalOpen, setModalOpen] = useState(false)
    return (
        <>
            <div className={`landing landing-service ${right ? 'landing-right' : ''}`}>
                {children}
                <div className={`landing-content`}>
                    <div>
                        <div className="landing-text">
                            <h1>{title}</h1>
                            <h2>{text}</h2>
                            {modal &&
                                <Link to="#" onClick={() => setModalOpen(true)} className="landing-button">Zleć Projekt</Link>
                            }
                        </div>
                        <Scroll />
                    </div>
                </div>
            </div>
            {ModalOpen &&
                <CommisionModal close={() => setModalOpen(false)} />
            }
        </>
    )
}

export default LandingService