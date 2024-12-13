import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPieChart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [bgColor, setBgColor] = useState('transparent')
    const [nav, setNav] = useState('nav-2xl')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            setBgColor('arrive')
        }
        else {
            setBgColor('transparent')
        }
    })

    const location = useLocation()
    useEffect(() => {
        if (location.pathname !== '/') {
            setBgColor('arrive');
        }
    })

    const handleBar = () => {
        setNav((pre) => pre === 'nav-2xl' ? 'nav-lg' : 'nav-2xl')
    }

    return (
        <header className={`max-w-screen-xl w-full min-h-14 text-textWhite fixed top-0 z-10 ${bgColor}`}>
            <div className="flex items-center mx-auto max-w-[1210px] px-2 min-h-14 justify-between">
                <motion.div
                    initial={{ x: -20, opacity: 0.5 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 max-w-56">
                    <FontAwesomeIcon icon={faPieChart} className='text-2xl' />
                    <h2 className="text-2xl uppercase font-[500]">Oasis Infobyte</h2>
                </motion.div>
                <nav
                    className={`${nav} font-400`}>
                    <Link className='relative link cursor-pointer' to={'/'}>Home</Link>
                    <Link className='relative link' to={'./about'}>About</Link>
                    <Link className='relative link' to={'./service'}>Services</Link>
                    <Link className='relative link' to={'./team'}>Team</Link>
                    <Link className='relative link' to={'./contact'}>Contact</Link>
                    <i className="fas fa-close"></i>
                </nav>
                <FontAwesomeIcon
                    onClick={handleBar} icon={faBars} className='text-[25px] block md:hidden' />
            </div>
        </header>
    )
}

export default Header