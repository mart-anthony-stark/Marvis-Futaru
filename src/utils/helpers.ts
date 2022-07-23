/**
 * Remove first word
 * @param {*} str
 * @returns str
 */
export const removeFirstWord = (str: string): string => {
  const indexOfSpace = str.indexOf(" ");
  if (indexOfSpace === -1) {
    return "";
  }
  return str.substring(indexOfSpace + 1);
};
