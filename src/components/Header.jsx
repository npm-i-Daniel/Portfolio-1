import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'

function Header() {
    return (
        <>
            <div className='header'>
                <div className="header__left">
                    <h1>
                        <span className='h-sp1'>Fronten<span className='h-sp2'>d</span> Develop<span className='h-sp2'>er</span></span>
                    </h1>
                </div>
                <div className="header__right">
                    <Link to="about" smooth={true} Duration={500} className='li'>
                        <h4>
                            About Me
                        </h4>
                    </Link>
                    <Link to="skills" smooth={true} Duration={500} className='li'>
                        <h4>
                            Skills
                        </h4>
                    </Link>
                    <Link to="projects" smooth={true} Duration={500} className='li'>
                        <h4>
                            Projects
                        </h4>
                    </Link>
                    <Link to="contact" smooth={true} Duration={500} className='li'>
                        <h4>
                            Contact Me
                        </h4>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;