export default interface Photo {
    url: string,
    width: number,
    height: number,
    displayWidth?: number | 'auto',
    displayHeight?: number | "auto"
  }