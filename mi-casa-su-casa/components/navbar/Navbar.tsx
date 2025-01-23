import React from 'react'
import NavSearch from "./Navsearch"
import LinkDropdown from './LinkDropdown'
import DarkMode from './Darkmode'
import Logo from './Logo'

function Navbar() {
  return (
    <nav className='border-b'>
        <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
            <Logo/>
            <NavSearch/>
            <div className = 'flex gap-4 items-center'>
                <DarkMode />
                <LinkDropdown/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar