import React from "react"
import { Link } from "gatsby"

const NewLink = ({ target, children, to = "none", onMouseEnter, className, onClick, external, style, disabled = false, active = false }) => {


    const concatedClasses = `${className ? className : ''} ${active ? "active-link" : ''} ${disabled ? "disabled" : ''}`


    if (to === "none") {
        return (
            <a onMouseEnter={onMouseEnter} onClick={onClick} className={concatedClasses} style={style}>{children}</a>
        )
    }
    else if (external) {
        return (
            <a href={to} target={target} onMouseEnter={onMouseEnter} onClick={onClick} className={concatedClasses} style={style}>{children}</a>
        )
    }
    else {
        return (
            <Link to={to} target={target} onMouseEnter={onMouseEnter} onClick={onClick} className={concatedClasses} style={style}>{children}</Link>
        )
    }
}

export default NewLink