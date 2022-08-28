import React, { useState } from "react"
import "./css/layout.scss"
import { Container, AppBar, Toolbar,  } from '@mui/material'
import { Sidebar, Link } from '../components'
import { initializeApp } from 'firebase/app'
import Menu from '../images/icons/hamburger-menu.svg'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    mainContainer: {
        minHeight: '400px',
        background: 'red',
        paddingLeft: (props) => props.sidebarOpen ? '400px': 'auto'
    }
})

export default function Layout({ children }) {
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

    const [SidebarOpen, setSidebarOpen] = useState(false)
    const classes = useStyles({sidebarOpen:SidebarOpen})

    return (
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <Link onClick={() => setSidebarOpen(true)}>
                    <img src={Menu} />
                    </Link>
                </Toolbar>
            </AppBar>
            <Sidebar open={SidebarOpen} setOpen={setSidebarOpen} />
            <Container className={classes.mainContainer}>
                {children}
            </Container>
        </div>
    )
}