 export const photoFolders = {
    museum: import.meta.glob("../assets/museum/*.jpg", {eager: true}),
    moon: import.meta.glob("../assets/moon/*.jpg", {eager: true}),
    branches: import.meta.glob("../assets/branches/*.jpg", {eager: true}),
    autumn: import.meta.glob('../assets/autumn-colors/*.jpg', {eager: true}),
    
  };
  
