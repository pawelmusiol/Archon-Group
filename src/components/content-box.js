import React from 'react'
import { Section } from "."

const ContentBox = ({ title, children, style }) => {
    return (
        <div className="main-text" style={style}>
            <div>
                <h1>{title}</h1>
                <p >
                    {children}
                </p>
            </div>
        </div>
    )
}

export default ContentBox