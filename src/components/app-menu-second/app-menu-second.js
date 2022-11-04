import React, {Component, useState} from 'react';
import './app-menu-second.scss';
import {NavLink, Outlet, useLocation, Navigate} from 'react-router-dom';
import {useAuth} from 'hooks/use-auth';
import {useDispatch} from "react-redux";
import {removeUser} from "store/slices/userSlice";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';



const AppMenuSecond = ({onBurgerChange, onMenuOff}) => {

	const dispatch = useDispatch();
    const {isAuth, email} = useAuth();



	const location = useLocation();
	console.log(location.pathname);	


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


	






		const setActive = ({ isActive }) => ({backgroundColor: isActive ? '#e5e5e5' : 'inherit'});

	let classNames = 'block';
    if (onMenuOff === true) {
        classNames = 'none';
    }

        return isAuth ? (
			<>
				<div className="app__menu-top">
					<div className="app__menu-top_right">
						<div className="app__menu-top_right-burger">							
							<IconButton
								className={'app__menu-top_right-burger-icon'}
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{mr: 2}}
								onClick={onBurgerChange}
							>
								<MenuIcon/>
							</IconButton>
						</div>
						<div className="app__menu-top_right-description">
							<EmojiObjectsIcon fontSize="large"/>
							<div>Обучающий курс по Dialux Evo/Dialux 4.13</div>
						</div>

					</div>
					<div className="app__menu-top_left">
						<Stack direction="row" spacing={1}>
							<Chip label="Dialux Evo"  onClick={handleClick}/>
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



            <div class="app__menu"
			style={{display: classNames}}
			>
			<ul class="app__menu-list">
			   <li><NavLink
			       className={"app__menu-list-head end"}
				   end
				   style={setActive}
				   to='/dlx413'>1 Введение</NavLink>
			   </li>

			  <li><NavLink
				    className={"app__menu-list-head end"}
					end
					style={setActive}
					to="/dlx413/guide">2 Основные понятия и определения</NavLink>
			  </li>

				<li><NavLink
					className={"app__menu-list-head end"}
					end
					style={setActive}
					to="/dlx413/3">3 Знакомство с интерфейсом программы</NavLink>
				</li>

				<li><NavLink
					className={"app__menu-list-head end"}
					end
					style={setActive}
					to="/dlx413/4">4 Спортивное освещение</NavLink>
				</li>



			
			   <li class="app__menu-list-part">4.1 Нормы, расчетные поверхности, расстановка светильников</li>
			   <li class="app__menu-list-part">4.2 Равномерность, освещенность на камеру, GR</li>
			  
			</ul>

				<footer className="app__footer">
					<div class="app__footer-links">
						<p><a href="#">О проекте</a></p>
						<p><a href="#">Рекламодателям</a></p>
						<p><a href="#">Сотрудничество</a></p>
					</div>
					<p class="app__footer-copyright">© 2022 Copyright</p>
				</footer>
				
	 </div>
	 <Outlet/>
	 </>
	 
 
        ): (
            <Navigate to="/login" />
        )

 
 
 }

 export default AppMenuSecond;