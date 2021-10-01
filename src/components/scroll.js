import React from "react"
import "./css/scroll.scss"
import { Link } from "."
import { animateScroll as scroll} from "react-scroll"

const scrollToNextSection = () => {
    scroll.scrollTo(window.innerHeight*0.94)
    console.log("dupa")
}

const ScrollButton = () => {
    return (
        <div className="scroll" onClick={scrollToNextSection}>
            <Link>
                <span>{ }</span>
                <span>{ }</span>
                <span>{ }</span>
            </Link>
        </div>
    )
}

export default ScrollButton