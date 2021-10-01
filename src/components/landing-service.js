import React from 'react'
import { Scroll } from "."

const LandingService = () => {
    return (
        <div className="landing landing-service">
            <div className="landing-content">
                {/*<img src={Logo} className="logo" alt="logo" />*/}
                <div>
                    <div className="landing-text">

                        <h1>Lorem Ipsum Dolor</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        {/*<Link to="#" onClick={OpenModal} className="landing-button">Umów spotkanie</Link>*/}
                    </div>
                    <Scroll />
                </div>
            </div>
        </div>
    )
}

export default LandingService