import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPieChart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [bgColor,setBgColor] = useState('transparent')

    window.addEventListener('scroll', () => {
        // console.log(window.scrollY);
        if(window.scrollY > 500){
            setBgColor('arrive')
            // console.log('object');
        }else{
            setBgColor('transparent')
        }
    })

    return (
        <header className={`max-w-screen-xl w-full min-h-14 text-textWhite fixed top-0 z-10 ${bgColor}`}> 
            <div className="flex items-center mx-auto max-w-[1210px] px-2 min-h-14  justify-between">
                <div className="flex items-center gap-3 max-w-56">
                    <FontAwesomeIcon icon={faPieChart} className='text-2xl' />
                    <h2 className="text-2xl uppercase font-[500]">Oasis Infobyte</h2>
                </div>
                <nav className='nav-2xl font-400'>
                    <Link className='relative link' to={'/'}>Home</Link>
                    <Link className='relative link' to={'./about'}>About</Link>
                    <Link className='relative link' to={'./service'}>Services</Link>
                    <Link className='relative link' to={'./team'}>Team</Link>
                    <Link className='relative link' to={'./contact'}>Contact</Link>
                    <i className="fas fa-close"></i>
                </nav>
                <FontAwesomeIcon icon={faBars} className='text-[25px] block md:hidden' />
            </div>
        </header>
    )
}

export default Header