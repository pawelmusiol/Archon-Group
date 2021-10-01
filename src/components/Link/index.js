import React from "react"
import { Link } from "gatsby"

const NewLink = ({ target, children, to = "none", onMouseEnter, className, onClick, external, style }) => {
    if (to === "none") {
        return (
            <a onMouseEnter={onMouseEnter} onClick={onClick} className={className} style={style}>{children}</a>
        )
    }
    else if(external){
        return (
            <a href={to} target={target} onMouseEnter={onMouseEnter} onClick={onClick} className={className} style={style}>{children}</a>
        )
    }
    else {
        return (
            <Link to={to} target={target} onMouseEnter={onMouseEnter} onClick={onClick} className={className} style={style}>{children}</Link>
        )
    }
}

export default NewLink