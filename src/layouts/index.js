import React from "react"
import "./css/layout.scss"
import Helmet from 'react-helmet'
import { TopMenu, Footer, CookiesBanner } from "../components"
import { initializeApp } from 'firebase/app'
import PageTransition from 'gatsby-plugin-page-transitions'


export default function Layout({ children, style, noFooter }) {
    const firebaseConfig = {
        apiKey: "AIzaSyDHprhVvBAv66f7WkBx5GxJf6YwoPmv0bI",
        authDomain: "archon-group.firebaseapp.com",
        projectId: "archon-group",
        storageBucket: "archon-group.appspot.com",
        messagingSenderId: "882034270326",
        appId: "1:882034270326:web:0ae5b805ae751ba3a1ff57"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return (
        <>
            <PageTransition
                defaultStyle={{
                    transition: '500ms ease-in-out',
                    opacity: 0
                }}
                transitionStyles={{
                    entering: { opacity: 1 },
                    entered: { opacity: 1 },
                    exiting: { opacity: 1 },
                    exited: { opacity: 0 }
                }}
                transitionTime={500}
            >
                <Helmet>
                    <link rel="stylesheet" href="https://use.typekit.net/fpr5kin.css" />
                </Helmet>
                <div style={style}>
                    <TopMenu />
                    {children}
                    {!noFooter &&
                        < Footer />
                    }
                    {/*<CookiesBanner />*/}
                </div>
            </PageTransition>
        </>
    )
}