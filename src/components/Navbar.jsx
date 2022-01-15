/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../layout/Navbar-styled';
export default function Navbar() 
{
    const [icon, setIcon] = useState(false)
    const toggleIcon = () => setIcon(!icon)
    return (
        <Nav>
            <div className="container_navbar">
                <Link className='logo' to="/codelandia-9/">Portifólio</Link>

                <div onClick={toggleIcon} className="menu_icon">
                    <i className={icon ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                
                <ul className={icon ? 'open' : 'close'}>
                    <li><a onClick={toggleIcon} href="#about">Sobre mim</a></li>
                    <li><a onClick={toggleIcon} href="#projects">Projetos</a></li>
                    <li><a onClick={toggleIcon} href="#services">Serviços</a></li>
                    <li><a onClick={toggleIcon} href="#skills">Minhas skills</a></li>
                </ul>
            </div>
        </Nav>
    )
}
