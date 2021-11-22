import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/Logo-2.png'

const mainNav = [
    {
        display: "Home",
        path: '/'
    },
    {
        display: "Shop",
        path: '/catalog'
    },
    {
        display: "Collection",
        path: '/collection'
    },
    {
        display: "Contact",
        path: '/contact'
    }
]

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
