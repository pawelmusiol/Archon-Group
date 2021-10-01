import React, { useEffect, useRef, } from "react";
import { Link } from "."
import Logo from "../images/logo-archon.png"
import { useDeep } from "./helpers"

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
                {
                    name: "Finanse",
                    to: "/uslugi/finanse"
                }
            ]
        },
        {
            name: "Galeria",
            to: "/galeria"
        },
        {
            name: "Kontakt",
            to: "/kontakt"
        },
    ]
}

const mapLinks = (prefix, link) => {
    if (link.content) {
        return (
            <div className="link-w-children">
                <Link to={link.to}>{link.name}</Link>
                <div className="children-links">
                    {/*<div className="children-links-inner">*/}
                    {link.content.map(subLink => <Link to={subLink.to}>{subLink.name}</Link>)}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
    else {
        return <Link to={link.to}>{link.name}</Link>
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

const TopMenu = () => {
    const prefix = useDeep()
    const topRef = useRef()
    useEffect(() => {
        document.addEventListener('scroll', () => changeClassOnScroll(topRef))
    }, [])

    const navLeft = menuData.left.map(link => <Link to={link.to}>{link.name}</Link>)
    const navRight = menuData.right.map((link) => mapLinks(prefix, link))
    return (
        <div>
            <header>
                <nav ref={topRef}>
                    <div className="left">
                        {navLeft}
                    </div>
                    {/*<div className="logo-div">
                        <img src={Logo} className="logo-top"/>
    </div>*/}
                    <div className="right">
                        {navRight}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default TopMenu