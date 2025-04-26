import React,{useState} from 'react'

const MenuButton = ({isOpen, toggleMenu}) => {

  return (
    <button 
        onClick={toggleMenu}
        className="block sm:hidden text-2xl">{isOpen ? <i className="fa fa-times" aria-hidden="true"></i> : <i className="fa-solid fa-bars"></i>}
    </button>
  )
}

export default MenuButton;