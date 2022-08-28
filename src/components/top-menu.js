import React, { useEffect, useRef, useState } from "react";
import { Link } from "."
import Logo from "../images/logo-archon.png"
import { useLocation } from '@reach/router'
import Hamburger from '../images/icons/hamburger-menu.svg'
import Close from '../images/icons/close.svg'
//import { StaticImage } from 'gatsby-plugin-image'

const menuData = {
    left: [
        {
            name: "Panel Klienta",
            to: "/panel-klienta"
        },
        {
            name: "+48 606 220 100",
            to: "tel:+48 606 220 100"
        }
    ],
    right: [
        {
            name: "Strona Główna",
            to: "/"
        },
        {
            name: "Usługi",
            to: "#",
            content: [
                {
                    name: "Biuro Rachunkowe",
                    to: "/uslugi/biuro-rachunkowe"
                },
                {
                    name: "Ubezpieczenia",
                    to: "/uslugi/ubezpieczenia"
                },
                {
                    name: "Media",
                    to: "/uslugi/media"
                },
                /* {
                    name: "Finanse",
                    to: "/uslugi/finanse"
                } */
            ]
        },
        /* {
            name: "Galeria",
            to: "/galeria"
        }, */
        {
            name: "Kontakt",
            to: "/kontakt"
        },
    ]
}

const mapLinks = (link, key, location) => {
    if (link.content) {
        return (
            <div className="link-w-children" key={key}>
                <Link to={link.to}>{link.name}</Link>
                <div className="children-links">
                    {/*<div className="children-links-inner">*/}
                    {link.content.map((subLink, key) => <Link to={subLink.to} key={key} active={setActive(subLink.to, location.pathname)}>{subLink.name}</Link>)}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
    else {
        return <Link to={link.to} active={setActive(link.to, location.pathname)}>{link.name}</Link>
    }
}
/**
 * 
 * @param {React.MutableRefObject<HTMLDivElement>} topRef 
 */
const changeClassOnScroll = (topRef) => {
    if (topRef.current) {
        if (window.pageYOffset >= window.innerHeight * 0.54) {
            if (topRef.current.className !== 'scrolled') {
                topRef.current.className = 'scrolled'
            }
        }
        else {
            if (topRef.current.className !== '') {
                topRef.current.className = ''
            }
        }
    }
}

const setActive = (to, path) => {
    if (to[to.length - 1] !== '/') {
        to = to + '/'
    }
    if (path[path.length - 1] !== '/') {
        path = path + '/'
    }
    if (to === path) {
        return true
    }
    return false

}

const TopMenu = () => {
    const topRef = useRef()
    const [Open, setOpen] = useState(false)
    const location = useLocation()
    let classes = ''
    useEffect(() => {
        document.addEventListener('scroll', () => changeClassOnScroll(topRef))
    }, [])

    useEffect(() => {
        if (Open) {
            classes = 'menu-show'
        }
        else {
            classes = ''
        }
    }, [Open])

    const openMenu = (e) => {
        if (Open) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }

    const navLeft = menuData.left.map((link, key) => <Link to={link.to} key={key} active={setActive(link.to, location.pathname)}>{link.name}</Link>)
    const navRight = menuData.right.map((link, key) => mapLinks(link, key, location))
    return (
        <div>
            <header>
                <nav ref={topRef} className={Open ? 'menu-show' : ''}>
                    <div className="left">
                        {navLeft}
                    </div>

                    <div className="right">
                        <img className="logo-top-bar" src='../images/logo-archon.png' />
                        {navRight}
                    </div>
                    <img src={Hamburger} className="hamburger" onClick={openMenu} />
                    <img src={Close} className="close" onClick={openMenu} />
                </nav>
            </header>
        </div>
    )
}

export default TopMenu