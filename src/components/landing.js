import React, { useState, useEffect, useRef } from "react"
import Logo from "../images/logo-white.png"
import { Link, Scroll } from "."

const Landing = ({ Modal, OpenModal, noContent }) => {
    const videoRef = useRef()


    useEffect(() => {
        videoRef.current.play()
    }, []);

    return (
        <>
            <div className="landing">
                <video muted={true} loop ref={videoRef} className="landing-bg">
                    <source src={`../../str_glowna_film.mov`} type="video/mp4" />
                </video>
                {!noContent &&
                    <div className="landing-content">
                        <img src={Logo} className="logo" alt="logo" />
                        <div>
                            <div className="landing-text">

                                <h1>Biuro<br /> Wsparcia Biznesu</h1>
                                <h2>
                                    Oferujemy wsparcie, którego próżno<br />szukać na Polskim rynku.
                                </h2>
                                <Link to="#" onClick={OpenModal} className="landing-button">Umów spotkanie</Link>
                            </div>
                            <Scroll />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Landing