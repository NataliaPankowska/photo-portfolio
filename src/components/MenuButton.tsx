import React from 'react'
import './MenuButton.css'

interface Props {
    handleShowNav: () => void;
    onMouseLeave: () => void;
    onMouseEnter: () => void
}

const MenuButton = ({handleShowNav, onMouseEnter, onMouseLeave}: Props) => {
  return (
    <div className='button-container'>
        <h5 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={handleShowNav} className='menu-button'>Menu</h5>
    </div>
  )
}

export default MenuButton