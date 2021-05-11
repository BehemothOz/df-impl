/*
 * mutates the incoming array !
 */
export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomPosition = Math.floor(Math.random() * i);
    [array[i], array[randomPosition]] = [array[randomPosition], array[i]]; // eslint-disable-line no-param-reassign
  }

  return array;
};

export const randomInteger = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};
