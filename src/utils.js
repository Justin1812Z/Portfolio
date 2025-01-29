export const getImageUrl = (path) => {
  if (!path) {
      console.error("Invalid path provided to getImageUrl");
      return "";
  }
  return new URL(`../../../assets/${path}`, import.meta.url).href;
};
