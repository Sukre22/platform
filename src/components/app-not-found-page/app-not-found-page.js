import React, {Component, useState} from 'react';
import './app-not-found-page.scss';
import {NavLink} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import {useAuth} from 'hooks/use-auth';
import {useDispatch} from "react-redux";
import {removeUser} from "store/slices/userSlice";
import IconButton from '@mui/material/IconButton';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';


const AppNotfoundpage = ({onMenuOff}) => {

    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();


    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return isAuth ? (


        <>

            <div className="app__menu-top">
                <div className="app__menu-top_right">

                    <div className="app__menu-top_right-description">
                        <EmojiObjectsIcon fontSize="large"/>
                        <div>Обучающий курс по Dialux Evo/Dialux 4.13</div>
                    </div>

                </div>
                <div className="app__menu-top_left">
                    <Stack direction="row" spacing={1}>
                        <Chip label="Dialux Evo" onClick={handleClick}/>
                        <Chip label="Dialux 4.13" variant="outlined" onClick={handleClick}/>
                    </Stack>
                    <IconButton

                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >

                        <MenuItem onClick={() => dispatch(removeUser())}>Выход</MenuItem>
                    </Menu>
                </div>


            </div>



            <div class='app__home-header'>

                <div class="app__home-header_top">


                    <div class="app__home-header_top-container">

                        <div class="app__home-header_top-container-title">
                            <h1 class='work'>Ошибка 404. Вы попали на страницу, которой не существует!</h1>
                        </div>



                    </div>
                    <div className="app__home-title">

                        <h3 className='app__home-title-h3'>Вы можете перейти на <NavLink to={"/"}>главную страницу</NavLink></h3>

                    </div>



                </div>

            </div>

        </>

    ) : (
        <Navigate to="/login" />
    )


}

export default AppNotfoundpage;