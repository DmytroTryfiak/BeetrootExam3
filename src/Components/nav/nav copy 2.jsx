import sprite from '../../assets/svg/sprite.svg'
import { useState, useEffect } from 'react'

function Nav() {
    return (
        <div className="main-nav">
            <svg className="logo">
                <use href={sprite + '#logo'}></use>
            </svg>
            <nav className="nav">
                <ul className="nav__list">
                    <NavLink link='#header' value='Home' />
                    <NavLink link='#about-us' value='About' />
                    <NavLink link='#services' value='Services' />
                    <NavLink link='#works' value='Works' />
                    <NavLink link='#team' value='Team' />
                    <NavLink link='#contact' value='Contact' />
                </ul>
            </nav>
        </div>
    );
}

function NavLink({ link, value }) {
    return (
        <li className="nav__item"><a href={link} className="nav__link">{value}</a></li>
    );
}

export default Nav;
