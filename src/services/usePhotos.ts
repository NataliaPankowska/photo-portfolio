
// import { photoFolders } from "./photosFolders";
  
//   const usePhotos = (folderKey: keyof typeof photoFolders): string[] => {
//     const folder = photoFolders[folderKey];
  
  
//     return Object.entries(folder).map(([path, module]) => {
//       return (module as { default: string }).default;
//     });
//   };
  
//   export default usePhotos;
// import { photoFolders } from "./photosFolders";

// interface Photo {
//   url: string;
//   width: number;
//   height: number;
// }

// const usePhotos = (folderKey: keyof typeof photoFolders): Photo[] => {
//   const folder = photoFolders[folderKey];

//   return Object.entries(folder).map(([_, module]) => {
//     const url = (module as { default: string }).default;

//     // Calculate dimensions
//     const img = new Image();
//     img.src = url;

//     return {
//       url,
//       width: img.width || 0, // Default to 0 if not yet loaded
//       height: img.height || 0,
//     };
//   });
// };

// export default usePhotos;

import { photoFolders } from "./photosFolders";
import Photo from "./photoInterface";



const usePhotos = async (folderKey: keyof typeof photoFolders): Promise<Photo[]> => {
  const folder = photoFolders[folderKey];

  const promises = Object.entries(folder).map(async ([_, module]) => {
    const url = (module as { default: string }).default;

    // Load image and extract dimensions
    const dimensions = await new Promise<{ width: number; height: number }>((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
    });

    return {
      url,
      ...dimensions,
    };
  });

  return Promise.all(promises);
};

export default usePhotos;


  
// import { photoFolders } from "./photosFolders";

// interface PhotoData {
//   url: string;
//   width: number;
//   height: number;
// }

// const usePhotos = (folderKey: keyof typeof photoFolders): string[] => {
//   const folder = photoFolders[folderKey];

//   const entries = Object.entries(folder).map(async ([path, module]) => {
//     const url = (module as { default: string }).default;
  

//     // Extract dimensions
//     const dimensions = await new Promise<{ width: number; height: number }>((resolve) => {
//       const img = new Image();
//       img.src = url;
//       img.onload = () => resolve({ width: img.width, height: img.height });
//     });

//     return { url, ...dimensions };
//   });

//   return Promise.all(entries); // Return an array of PhotoData objects
// };

// export default usePhotos;
