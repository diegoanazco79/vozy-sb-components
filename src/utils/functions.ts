/**
 * Truncates the received text with the received maxLength
 * @param text
 * @param maxLength
 * @returns
 */
export const truncateText = (text: string, maxLength: number) => {
  if (!text || !maxLength) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
};

/**
 * Function that formats a specific text
 * @param text
 * @returns
 */
export const pretifyText = (text: string = '') => {
  return text.replace(/[-_.]/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
