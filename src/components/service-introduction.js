import React from 'react';
//import { StaticImage } from 'gatsby-plugin-image'
import LogoArchon from '../images/logo-archon.png'

const Intro = ({ children, style }) => {
    return (
        <div className="service-introduction section" >
            <img src={LogoArchon} /* {`${prefix}../../images/logo-archon.png`} */ />
            <p style={style}>
                {children}
            </p>
        </div>
    )
}

export default Intro