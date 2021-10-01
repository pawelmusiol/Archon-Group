import React from "react"
import { Link, Section } from "."


const checkForLocation = (prefix, to) => {
    if (prefix && (prefix + to) === window.location.pathname) {
        return "active"
    }
    else if (to === window.location.pathname) {
        return "active"
    }
    return ""
}

const checkForLocationLocal = (current, name) => {
    if (current === name) {
        return "active"
    }
    return ""
}

const Links = ({ links, prefix, onClick, current }) => {
    let children = []
    if (!onClick) {
        children = links.map((link, key) => {
            if (prefix) {
                return <Link key={key} className={checkForLocation(link.to)} to={prefix + link.to}>{link.name}</Link>
            }
            else {
                return <Link key={key} className={checkForLocation(link.to)} to={link.to}>{link.name}</Link>
            }
        })
    }
    else{
        children = links.map((link, key) => {
            return <Link to="none" className={checkForLocationLocal(current, link.name)} onClick={() => onClick(link.name)}>{link.name}</Link>
        })
    }

    return (
        <Section className="links" row>
            {children}
            
        </Section>
    )
}

export default Links
