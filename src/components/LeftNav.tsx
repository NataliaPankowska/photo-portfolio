import React, { useState } from 'react'
import Logo from './Logo'
import Menu from './Menu'
import DisplayType from './DisplayType';
import MenuButton from './MenuButton';
import './LeftNav.css'


interface Props{
    handleProjectChoice: (project: 'museum' | 'branches' | 'moon' | 'autumn' ) => void;
    handleDisplay: (disp: 'slider' | 'thumbs') => void;
    handleHideNav: () => void;
    navVisibility: boolean;
    project: string,
    onMouseLeave: () => void,
    onMouseEnter: () => void
}
// const LeftNav = ({handleProjectChoice, handleDisplay}: Props) => 
const LeftNav = ({handleProjectChoice, handleDisplay, handleHideNav, navVisibility, project, onMouseEnter, onMouseLeave}: Props) => {


  return (
    <div className='left-nav-container txt'>
  
    <div className={`left-nav ${navVisibility ? 'expanded' : 'collapsed'} background`}>
     
    
      <Menu onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} navVisibility={navVisibility} project={project} handleHideNav={handleHideNav} handleProjectChoice={handleProjectChoice} handleDisplay={handleDisplay}/>
   
        
        {/* <Menu handleProjectChoice={handleProjectChoice} handleDisplay={handleDisplay}/> */}
        {/* <DisplayType display={handleDisplay}/> */}
    </div>
    <div onClick={handleHideNav} className={`dark-thing ${navVisibility ? 'expanded' : 'collapsed'}`}>
    </div>
    </div>
  )
}

export default LeftNav