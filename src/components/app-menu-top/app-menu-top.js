import React, {Component, useState} from 'react';
import './app-menu-top.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';



const AppMenuTop = ({onBurgerChange}) => {





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


    const burgerClick = () => {
        console.info('You clicked the Chip.');
    };







        return(
          <div class="app__menu-top">
              <div class="app__menu-top_right">
                  <div class="app__menu-top_right-burger">
                      {/*<MenuIcon className={'app__menu-top_right-burger-icon'} />*/}
                      <IconButton
                         className={'app__menu-top_right-burger-icon'}
                         size="large"
                         edge="start"
                         color="inherit"
                         aria-label="menu"
                         sx={{ mr: 2 }}
                         onClick={onBurgerChange}
                         >
                         <MenuIcon  />
                     </IconButton>
                  </div>
                  <div class="app__menu-top_right-description">
                      <EmojiObjectsIcon fontSize="large" />
                      <div>Обучающий курс по Dialux Evo/Dialux 4.13</div>
                  </div>

              </div>
              <div class="app__menu-top_left">
                  <Stack direction="row" spacing={1}>
                      <Chip label="Dialux Evo" onClick={handleClick} />
                      <Chip label="Dialux 4.13" variant="outlined" onClick={handleClick} />
                  </Stack>
                  <IconButton
                      
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                  >
                      <AccountCircle />
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

                      <MenuItem onClick={handleClose}>Выход</MenuItem>
                  </Menu>
              </div>


          </div>
        )


  /*  }*/
}

export default AppMenuTop;