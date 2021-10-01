import React from "react"
import "./css/layout.scss"
import { TopMenu, Footer } from "../components"

export default function Layout({ children, style, noFooter }) {
    return (
        <div style={style}>
            <TopMenu />
            {children}
            {!noFooter &&
                < Footer />
            }
        </div>
    )
}