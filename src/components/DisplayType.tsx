import React from 'react'

interface Props{
  display: (disp: 'slider' | 'thumbs') => void
}

const DisplayType = ({display}: Props) => {
  return (
    <div style={{display: 'inline-flex', fontSize:'10px', margin: '10px', gap: '10px'}}>
        <h4 onClick={() => display('slider')}>Slider</h4>
        <h4 onClick={() => display('thumbs')}>Thumbnails</h4>
    </div>
  )
}

export default DisplayType