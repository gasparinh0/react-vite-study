import * as React from 'react';
import { useState } from 'react'

import { NavLink } from "react-router";

//Imports do material UI
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material'

//Imports do react Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome, FaUser } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";

export default function Header({ user }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        //O ! inverte o valor, se estiver true, ele fica false, e vice-versa.
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleToggleMenu}
                        >
                            <GiHamburgerMenu />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        {
                            user.logged
                                ? <Typography variant="h4">{user.email}</Typography>
                                : <Button color="inherit">Login</Button>
                        }
                    </Toolbar>
                </AppBar>
            </Box>
            <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
                <List>
                    <ListItem button>
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleToggleMenu}>
                            <ListItemIcon><FaHome /></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </NavLink>
                    </ListItem>
                </List>
                <List>
                    <ListItem button>
                        <NavLink to="/customers" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleToggleMenu}>
                            <ListItemIcon><FaUser /></ListItemIcon>
                            <ListItemText>Lista de clientes</ListItemText>
                        </NavLink>
                    </ListItem>
                </List>
                <List>
                    <ListItem button>
                        <NavLink to="/customers/add" style={{ textDecoration: 'none', color: 'inherit' }} onClick={handleToggleMenu}>
                            <ListItemIcon><IoAddCircleOutline /></ListItemIcon>
                            <ListItemText>Cadastro de clientes</ListItemText>
                        </NavLink>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}