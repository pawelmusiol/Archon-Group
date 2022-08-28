import React from 'react';
import { Drawer, List, ListItemText, ListItemButton, ListItem } from '@mui/material'
import { Link } from '.'

const Sidebar = ({ open, setOpen }) => {
    return (
        <Drawer
            anchor='left'
            open={open}
            sx={{
                background: '#ffc939',
                '& .MuiDrawer-paper': {
                    width: '200px'
                },
                '& *': {
                    color: 'black'
                }
            }}
            variant='persistent'
        >
            <div style={{ backgroundColor: '#fefefe' }}>
                <p onClick={() => setOpen(false)}>zamknij</p>
                <List>
                    <SideLink to='/admin'>Start</SideLink>
                    <SideLink to='/admin/zapytania'>Zapytania</SideLink>
                </List>
            </div>
        </Drawer>
    )
}

const SideLink = ({ children, to }) => {
    return (
        <Link to={to}>
            <ListItem>
                <ListItemButton >
                    <ListItemText>
                        {children}
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </Link>
    )
}

export default Sidebar