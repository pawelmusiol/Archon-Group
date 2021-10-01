import React, { useState, useEffect, useRef } from "react"
import Logo from "../images/logo-archon.png"
import Backgorund from "../videos/MeetingLq.mp4"
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
                    <source src={Backgorund} type="video/mp4" />
                </video>
                {!noContent &&
                    <div className="landing-content">
                        <img src={Logo} className="logo" alt="logo" />
                        <div>
                            <div className="landing-text">

                                <h1>Lorem Ipsum Dolor</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
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