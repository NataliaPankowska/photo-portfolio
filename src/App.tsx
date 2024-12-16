

import { useEffect, useState } from 'react';
import './App.css'
import CustomCursor from './components/CustomCursor';
import Gallery from './components/gallery';
import Slider from './components/Slider';

import LeftNav from './components/LeftNav';
import MenuButton from './components/MenuButton';




function App() {

  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'next'>('default')
  const [project, setProject] = useState<'museum' | 'branches' | 'moon' | 'autumn'>('museum');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [display, setDisplay] = useState<'slider' | 'thumbs'>('slider');
  const [showNav, setShowNav] = useState<boolean>(false);

 const handleProjectChoice = (projectKey: 'museum' | 'branches' | 'moon' | 'autumn') => {
  setProject(projectKey );
 }
const handlePhotoIndex = (index: number) => {
  setPhotoIndex(index);
  setDisplay('slider')
}
useEffect(() => {
  setPhotoIndex(0);
}, [project]);

const handlePhotoChange = (photNum: number) => {
  setPhotoIndex((prevIndex) => (prevIndex + 1) % photNum);
 }
const handleDisplay = (disp: 'slider' | 'thumbs') => setDisplay(disp)
const handleShowNav = () => setShowNav(true);
const handleHideNav = () => setShowNav(false);
  return (
    <div style={{minHeight: '100vh'}}>
    <CustomCursor cursorVariant={cursorVariant}/>
    <LeftNav project={project} handleDisplay={handleDisplay} handleProjectChoice={handleProjectChoice} handleHideNav={handleHideNav} navVisibility={showNav} onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}/>
   <MenuButton handleShowNav={handleShowNav} onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}/>  
  
    

  
    <div style={{display: 'flex', justifyContent: 'center', width: '100vw', flexDirection: 'column', height: '100%', alignContent: 'center'}}>
      {display === 'slider' ?  <Slider handlePhotoChange={handlePhotoChange} onMouseEnter={() => setCursorVariant('next')} onMouseLeave={() => setCursorVariant('default')} folderKey={project} photoIndex={photoIndex} /> 
      :<Gallery setIndex={handlePhotoIndex} folderKey={project} index={photoIndex} onMouseEnter={() => setCursorVariant('hover')} onMouseLeave={() => setCursorVariant('default')}/>
}
   
    </div>
    </div>
  )
}

export default App
