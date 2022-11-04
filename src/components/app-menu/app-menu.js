import React, {Component, useState} from 'react';
import './app-menu.scss';
import {NavLink, useNavigate, Link, Outlet, useLocation, Navigate} from 'react-router-dom';
import {useAuth} from 'hooks/use-auth';
import {useDispatch} from "react-redux";
import {removeUser} from "store/slices/userSlice";
import { red } from '@mui/material/colors';
//import './app-menu-top.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
//import {useState} from '@types/react';


const AppMenu = ({onBurgerChange, onMenuOff}) => {

	const dispatch = useDispatch();
    const {isAuth, email} = useAuth();



	const location = useLocation();
	console.log(location.pathname);

	/*const activeButton = {
		if (location.pathname)
	}*/

    let navigate = useNavigate();
	const routeChange = () =>{
        let path = `dlxevo`;
        navigate(path);
    }
    const routeChange2 = () =>{
        let path = `dlx413`;
        navigate(path);
    }

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
							{/*<MenuIcon className={'app__menu-top_right-burger-icon'} />*/}
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
							<Chip label="Dialux Evo" variant="outlined" onClick={routeChange}/>
							<Chip label="Dialux 4.13"  onClick={routeChange2}/>
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
				   to='/dlxevo'>1 Введение</NavLink>
			   </li>

			  <li><NavLink
				    className={"app__menu-list-head end"}
					end
					style={setActive}
					to="/dlxevo/guide">2 Основные понятия и определения</NavLink>
			  </li>

				<li><NavLink
					className={"app__menu-list-head end"}
					end
					style={setActive}
					to="/dlxevo/3">3 Знакомство с интерфейсом программы</NavLink>
				</li>

				<li><NavLink
					className={"app__menu-list-head end"}
					end
					style={setActive}
					to="/dlxevo/4">4 Моделирование освещаемого объекта</NavLink>
				</li>



				{/* <li class="app__menu-list-head end">3 Знакомство с интерфейсом программы</li> */}
				{/*<li class="app__menu-list-head">4 Моделирование освещаемого объекта</li>*/}
			   <li class="app__menu-list-part">4.1 Импорт чертежей различных форматов</li>
			   <li class="app__menu-list-part">4.2 Построение зданий и его помещений</li>
			   <li class="app__menu-list-part">4.3 Добавление дверей, окон, потолков и крыши</li>
			   <li class="app__menu-list-part">4.4 Добавление 3D объектов</li>
			   <li class="app__menu-list-part end">4.5 Применение материалов и цветов</li>
			   <li class="app__menu-list-head">5 Расчет освещения</li>
			   <li class="app__menu-list-part">5.1 Расстановка и настройка светильников</li>
			   <li class="app__menu-list-part">5.2 Создание расчетных поверхностей</li>
			   <li class="app__menu-list-part">5.3 Настройка результатов расчета</li>
			   <li class="app__menu-list-part end">5.4 Расчет аварийного освещения</li>
			   <li class="app__menu-list-head end">6 Создание отчета</li>
			   <li class="app__menu-list-head">7 Практика</li>
			   <li class="app__menu-list-part">7.1 Расчет наружного освещения</li>
			   <li class="app__menu-list-part">7.2 Расчет периметрального освещения</li>
			   <li class="app__menu-list-part">7.3 Расчет спортивной площадки с учетом UGR-показателя</li>
			   <li class="app__menu-list-part end">7.4 Расчет спортивной площадки с учетом GR-показателя</li>
			   <li class="app__menu-list-head end">8 Заключение</li>
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

 export default AppMenu;