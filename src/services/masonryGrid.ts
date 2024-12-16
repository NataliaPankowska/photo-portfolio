
// // import Photo from "./photoInterface";
// // // interface Photo {
// // //   url: string;
// // //   width: number;
// // //   height: number;
// // // }
// // type ScaledPhoto = Photo & { displayWidth: number; displayHeight: number | "auto" };

// // const masonryGrid = ({ photos, containerWidth }: { photos: Photo[] | null; containerWidth: number | null;}) => {
// //   const gap = 1; // Gap between photos
// //   const numPhotosPerRow = 3;

// //   // Calculate dimensions dynamically
// //   const rows = [];
// //   if (!photos || !containerWidth) {
// //     return [];
// //   }

// //     for (let i = 0; i < photos.length; i += numPhotosPerRow) {
// //         const rowPhotos = photos.slice(i, i + numPhotosPerRow);
// //         console.log('rowphotos' + JSON.stringify(rowPhotos));
// //         // Calculate total aspect ratio for the row
// //         const totalAspectRatio = rowPhotos.reduce((sum, photo) => sum + photo.width / photo.height, 0);
    
// //         // Calculate the height for the row
// //         const rowHeight = (containerWidth - gap * (numPhotosPerRow - 1)) / totalAspectRatio;
    
// //         // Update each photo with calculated dimensions
// //         const scaledPhotos = rowPhotos.map((photo) => (
// //           {

// //           ...photo,
// //           displayWidth: (rowHeight * photo.width) / photo.height,
// //           displayHeight: rowHeight,
// //         }));


 
// //     rows.push(scaledPhotos);
    
// //    const lastRow = rows[rows.length - 1];

// //   if (lastRow && lastRow.length === 1) {
// //     lastRow[0] = {
// //       ...lastRow[0],
// //       displayWidth: containerWidth * 0.2, // Reduce width to 20% of the container
// //       displayHeight: "auto", // Maintain aspect ratio
// //     };
// //   }

    
// //   }
// //   // console.log('Photos passed to masonryGrid:', photos);
// //   // console.log('Rows generated by masonryGrid:', rows);
// //       return rows;
// // }

 

// // export default masonryGrid;

// import Photo from "./photoInterface";

// // Extended Photo type for displayWidth and displayHeight
// type ScaledPhoto = Photo & { displayWidth: number | "auto"; displayHeight: number | "auto" };

// const masonryGrid = ({
//   photos,
//   containerWidth,
// }: {
//   photos: Photo[] | null;
//   containerWidth: number | null;
// }): ScaledPhoto[][] => {
//   const gap = 0; // Gap between photos
//   const numPhotosPerRow = 3;

//   // Initialize rows array
//   const rows: ScaledPhoto[][] = [];

//   if (!photos || !containerWidth) {
//     return [];
//   }

//   for (let i = 0; i < photos.length; i += numPhotosPerRow) {
//     const rowPhotos = photos.slice(i, i + numPhotosPerRow);

//     // Calculate total aspect ratio for the row
//     const totalAspectRatio = rowPhotos.reduce(
//       (sum, photo) => sum + photo.width / photo.height,
//       0
//     );

//     // Calculate the height for the row
//     const rowHeight = (containerWidth - gap * (numPhotosPerRow - 1)) / totalAspectRatio;

//     // Update each photo with calculated dimensions
//     const scaledPhotos: ScaledPhoto[] = rowPhotos.map((photo) => ({
//       ...photo,
//       displayWidth: (rowHeight * photo.width) / photo.height,
//       displayHeight: rowHeight,
//     }));

//     rows.push(scaledPhotos);
//   }

//   // Handle last row (if it has only 1 photo)
//   const lastRow = rows[rows.length - 1];
//   if (lastRow && lastRow.length === 1) {
//     lastRow[0] = {
//       ...lastRow[0],
//       displayWidth: containerWidth * 0.5, // Reduce width to 20%
//       displayHeight:  // Allow "auto"
//     };
//   }

//   return rows;
// };

// export default masonryGrid;
import Photo from "./photoInterface";

// Extended Photo type for displayWidth and displayHeight
type ScaledPhoto = Photo & { displayWidth: number | "auto"; displayHeight: number | "auto" };

const masonryGrid = ({
  photos,
  containerWidth,
}: {
  photos: Photo[] | null;
  containerWidth: number | null;
}): ScaledPhoto[][] => {
  // const gap = 0; // Gap between photos
  const numPhotosPerRow = window.innerWidth > 425 ? 4 : 2;

  // Initialize rows array
  const rows: ScaledPhoto[][] = [];

  if (!photos || !containerWidth) {
    return [];
  }

  for (let i = 0; i < photos.length; i += numPhotosPerRow) {
    const rowPhotos = photos.slice(i, i + numPhotosPerRow);

    // Calculate total aspect ratio for the row
    const totalAspectRatio = rowPhotos.reduce(
      (sum, photo) => sum + photo.width / photo.height,
      0
    );

    // Calculate the height for the row
    const rowHeight = (containerWidth -  (numPhotosPerRow - 1)) / totalAspectRatio;

    // Update each photo with calculated dimensions
    const scaledPhotos: ScaledPhoto[] = rowPhotos.map((photo) => ({
      ...photo,
      displayWidth: (rowHeight * photo.width) / photo.height,
      displayHeight: rowHeight,
    }));

    rows.push(scaledPhotos);
  }

  // Handle last row (if it has only 1 photo)
  const lastRow = rows[rows.length - 1];
  const previousRow = rows[rows.length - 2];

  if (lastRow && lastRow.length === 1 && previousRow) {
    const previousRowHeight = previousRow[0].displayHeight; // Get the height of the previous row
    lastRow[0] = {
      ...lastRow[0],
      displayWidth: "auto", // Set width to auto
      displayHeight: previousRowHeight, // Match the height of the previous row
    };
  }

  return rows;
};

export default masonryGrid;
