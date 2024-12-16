
import React, { useEffect, useState } from 'react'
import usePhotos from '../services/usePhotos';
import Photo from '../services/photoInterface';
import './Slider.css'

interface Props {
    folderKey: "museum" | "moon" | "branches" | "autumn",
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    photoIndex: number,
    handlePhotoChange: (photNum: number) => void
}
const Slider = ({ folderKey, onMouseLeave, onMouseEnter, photoIndex, handlePhotoChange }: Props) => {
    const [photos, setPhotos] = useState<Photo[] | null>(null);
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {
        setLoading(true);
        usePhotos(folderKey).then((loadedPhotos) => {
          setPhotos(loadedPhotos);
          setLoading(false);
        });
      }, [folderKey]);

      // useEffect(() => {
      //   setDisplayedPhotoIndex(photoIndex);
      // }, [photoIndex])
    
      if (loading) return <div>Loading...</div>;
      if (!photos) return <div>No photos available.</div>;
  
      // const handlePhotoChange = () => {
      //  setDisplayedPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      // }
  return (
    <div className='slider-container' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => handlePhotoChange(photos.length)}>
        <img className='slider' src={photos[photoIndex].url} />
    </div>
  )
}

export default Slider