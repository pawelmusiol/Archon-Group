import React from 'react';
import { Section } from '.'
import Img from 'gatsby-image'

const ServiceSection = ({ title, subtitle, children, image, image2, margin, style }) => {
    return (
        <Section column className="service-section" style={{ transform: `translateX(${margin})`, ...style }}>
            <Section row className="service-row">
                <div className="service-text">
                    <h1 className="service-title">{title}</h1>
                    <h4 className="service-subtitle">{subtitle}</h4>
                    <p>
                        {children}
                    </p>
                </div>
                <div className="service-images">
                    {image2 &&
                        <div className="service-image-container floating">
                            <img src={image2} />
                        </div>
                    }
                    <div className="service-image-container stable">
                        <img src={image} />
                    </div>
                </div>
            </Section>
        </Section>
    )
}

export default ServiceSection