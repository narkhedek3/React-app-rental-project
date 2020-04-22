
export const capitalize = (value) => {
  if (!value || typeof value !== 'string') {
    return '';
  }

  // capitalizing first letter of word
  return value
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
} 