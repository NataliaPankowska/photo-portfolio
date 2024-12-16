

import { useEffect, useState } from 'react';

interface Props {
cursorVariant: 'default' | 'hover' | 'next'
}

const CustomCursor = ({cursorVariant} : Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);

    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);
 



  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        // width: cursorVariant === 'default' ? '20px' : '100px',
        // height: cursorVariant === 'default' ? '20px' : '80px',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        
      }}
    >
      <div style={{
          transition: 'border opacity .5s ease-out',
              display: cursorVariant === 'next' ? 'none' : 'block',
              width: '10px',
              height:'10px',
              border: cursorVariant === 'hover' ? '5px solid #ffbe00' : '1px solid #ffbe00',
              opacity: cursorVariant === 'hover' ? '.5' : '1',
              borderRadius: '50%',
              backgroundColor: '#ffbe00',
             
      }}> </div>
      <h4 style={{display: cursorVariant === 'next' ? 'block' : 'none', textTransform: 'uppercase', fontSize: '10px' }}>next</h4>
    </div>
  );
};

export default CustomCursor;
