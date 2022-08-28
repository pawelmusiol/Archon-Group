import React from "react"
import { Link, Section } from "."
import { graphql } from "gatsby"
import { useLocation } from '@reach/router'


const checkForLocation = (prefix, to, pathname) => {
    if (prefix && (prefix + to) === pathname) {
        return "active"
    }
    else if (to === pathname) {
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
    const location = useLocation()
    if (!onClick) {
        children = links.map((link, key) => {
            if (prefix) {
                return <Link key={key} className={checkForLocation(prefix, link.to, location.pathname)} to={prefix + link.to} disabled={link.disabled}>{link.name}</Link>
            }
            else {
                return <Link key={key} className={checkForLocation('/', link.to, location.pathname)} to={link.to} disabled={link.disabled}>{link.name}</Link>
            }
        })
    }
    else {
        children = links.map((link, key) => {
            return <Link to="none" key={key} className={checkForLocationLocal(current, link.name)} onClick={() => onClick(link.name)} disabled={link.disabled}><p>{link.name}</p></Link>
        })
    }

    return (
        <Section className="links" row>
            {children}

        </Section>
    )
}

export default Links

export const query = graphql`
    query PageQuery {
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`