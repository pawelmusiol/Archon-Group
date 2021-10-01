import React from "react"
import "./css/section.scss"

const Section = ({ children, title, className, row, column, style }) => {

    let classes = "section"
    if (className) {
        classes += " " + className
    }
    if (row) {
        classes += " section-row"
    }
    else if (column) {
        classes += " section-column"
    }
    else {
        classes += " section-column"
    }

    return (
        <div className={classes} style={style}>
            {title &&
                <h1>{title}</h1>
            }
            {children}
        </div>
    )
}

export default Section