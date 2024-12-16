import React, { useEffect, useState } from 'react'
import './Menu.css'
import { descriptions } from '../services/descriptions';
const projects: { name: string; key: 'museum' | 'branches' | 'moon' | 'autumn' }[]=[{name: 'Museum', key: 'museum'}, {name: 'Branches', key: 'branches'}, {name: 'Moon', key: 'moon'}, {name: 'Autumn colors', key: 'autumn'} ]
interface Props{
    handleProjectChoice: (project: 'museum' | 'branches' | 'moon' | 'autumn' ) => void;
    handleDisplay: (disp: 'slider' | 'thumbs') => void;
    handleHideNav: () => void;
    project: string;
    navVisibility: boolean,
    onMouseLeave: () => void,
    onMouseEnter: () => void
}

const Menu = ({handleProjectChoice, handleDisplay, handleHideNav, project, navVisibility, onMouseLeave, onMouseEnter}: Props) => {
  const [descriptionIndex, setDescriptionIndex] = useState<number>(0);
  const [titleIndex, setTitleIndex] = useState<number>(0);

  useEffect(() => {
    setTitleIndex(() => projects.findIndex((p) => p.key === project));
    setDescriptionIndex(() => descriptions.findIndex((i) => i.key === project))
  }, [project])
  

   
  return (
    <div className='menu-container'>
    <h4 onClick={handleHideNav}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='close-button' >&times;</h4>
   
    <div className='sub-container'>
           
             <h3 className={`title ${navVisibility ? 'expand' : 'collapsed'}`}>Natalia Pankowska</h3>

        <div className={`projects-container ${navVisibility ? 'expand' : 'collapsed'}`}>
        <h4>Projects</h4>
        <div style={{}}>
        {projects.map(project => <h3 key={project.key} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => {
            handleProjectChoice(project.key);
            handleDisplay('thumbs');
            }} className='project' >{project.name}</h3>)}
        </div>
        </div>
        <div className={`description ${navVisibility ? 'expand' : 'collapsed'}`} style={{marginLeft: '20px'}}>
            <h4>{projects[titleIndex].name}</h4>
            <p style={{fontSize: '12px', lineHeight: '17px', paddingRight: '10px'}}>{descriptions[descriptionIndex].description}</p>
        </div>
    </div>
    </div>
   
  )
}

export default Menu