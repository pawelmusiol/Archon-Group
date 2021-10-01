import React from 'react';
import { Section } from '.'

const ServiceSection = ({ title, children, image, image2 }) => {
    return (
        <Section column className="service-section">
            <Section row className="service-row">
                <div className="service-text">
                    <h1 className="service-title">{title}</h1>
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