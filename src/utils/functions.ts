/**
 * Truncates the received text with the received maxLength
 */
export const truncateText = (text: string, maxLength: number) => {
  if (!text || !maxLength) return '';
  return (text.length > maxLength) ? text.slice(0, maxLength) + '...' : text;
};