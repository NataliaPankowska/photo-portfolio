
import { useEffect, useState } from "react";
import usePhotos from "../services/usePhotos";
import masonryGrid from "../services/masonryGrid";
import { widthInPixels } from "../services/widthInPixels";

interface Props{
  folderKey: "museum" | "moon" | "branches" | "autumn",
  setIndex: (index: number) => void; 
  index: number,
  onMouseLeave: () => void;
  onMouseEnter: () => void;
}

interface Photo {
  url: string;
  width: number;
  height: number;
}

const Gallery = ({ folderKey, setIndex, index, onMouseLeave, onMouseEnter }: Props) => {
  const [photos, setPhotos] = useState<Photo[] | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    usePhotos(folderKey).then((loadedPhotos) => {
      setPhotos(loadedPhotos);
      setLoading(false);
    });
 

  }, [folderKey]);

  if (loading) return <div>Loading...</div>;
  if (!photos) return <div>No photos available.</div>;

 
  const containerWidth = widthInPixels();
  console.log(containerWidth);
  const rows = masonryGrid({ photos, containerWidth });

  const handleClick = (url: any) => {
    const index = photos.map(el => el.url).indexOf(url);
    setIndex(index)
  }
const gap = 5;

  return (
    <div style={{display:'flex', width: '100vw', justifyContent: 'center', paddingTop: '5vh', alignItems: 'center', minHeight: '90vh'}}>
    <div style={{ display: "flex", flexDirection: "column", gap: `${gap}px`, width: containerWidth }}>
      {rows?.map((row, rowIndex) => {
      const isLastRow = rowIndex === rows.length - 1;
      return (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            gap: "5px",
            justifyContent: isLastRow ? 'flex-start' :"center",
            marginLeft: isLastRow ? `-${gap}px` : 0
          }}
        >
          {row.map((photo, photoIndex) => (
            <img
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onClick={() => handleClick(photo.url)}
              key={photoIndex}
              src={photo.url}
              alt={`Image ${photoIndex + 1}`}
              style={{
                width:`${photo.displayWidth}px`,
                height:`${photo.displayHeight}px`,
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      )})}
    </div>
    </div>
  );
};

export default Gallery;


// import { useEffect, useState } from "react";
// import usePhotos from "../services/usePhotos";

// const Gallery = ({ folderKey }: { folderKey: "museum" | "moon" | "branches" }) => {
//   // const [photos, setPhotos] = useState<{ url: string; width: number; height: number }[]>([]);

//   // useEffect(() => {
//   //   const fetchPhotos = async () => {
//   //     const photoData = await usePhotos(folderKey);
//   //     setPhotos(photoData);
//   //   };

//   //   fetchPhotos();
//   // }, [folderKey]);
  
// // console.log(photos);
//   return (
//     <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
//       {photos.map((photo, index) => (
//         <div
//           key={index}
//           style={{
//             backgroundImage: `url(${photo.url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             aspectRatio: `${photo.width} / ${photo.height}`, // Maintains original ratio
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
