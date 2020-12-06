import sprite from '../../assets/svg/sprite.svg'
import { useState, useEffect } from 'react'

function Nav() {
    const [matches, setMatches] = useState(window.matchMedia("(max-width: 960px)").matches);
    let [menuState, setMenuState] = useState(false);
    const componentDidMount = () => {
        const handler = e => { setMatches(e.matches) };
        window.matchMedia("(max-width: 960px)").addListener(handler);
    }
    useEffect(componentDidMount, [])

    let classButton = matches ? 'menuButton' : 'menuButton_hide'
    let classNav, classNavList, classButtonIco
    if (matches) {
        if (menuState) {
            classNav = 'nav nav_small'
            classNavList = 'nav__list_col'
            classButtonIco = 'menuButton__ico menuButton__ico_active'
        }
        else {
            classNav = 'nav nav_hide'
            classButtonIco = 'menuButton__ico'
        }
    }
    else {
        classNav = 'nav'
        classNavList = 'nav__list'   
        menuState=false     
    }

    const handleButton = () => {
        setMenuState(!menuState)

    }

    return (
        <div className="main-nav">
            <svg className="logo">
                <use href={sprite + '#logo'}></use>
            </svg>
            <div className={classButton} onClick={handleButton}>
                <span className={classButtonIco}></span>
            </div>
            <nav className={classNav}>
                <ul className={classNavList}>
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
