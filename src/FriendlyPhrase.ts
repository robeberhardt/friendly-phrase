import { adjectives } from './words/adjectives';
import { animals } from './words/animals';
import { colors } from './words/colors';

/**
 * @Method: Returns a three-word passphrase with a separator string
 * between each word - order is adjective-color-animal
 * @param {string} [sep = ' '] - The separator charatcter
 * @param {string} [prevent = ''] - a matching string used
 * to prevent (very unlikely) duplicate results
 * @Return {string}
 */
export function phrase(sep: string = ' ', prevent: string = '') {
  const result = `${adjective()}${sep}${color()}${sep}${animal()}`;
  if (result !== prevent) {
    return result;
  } else {
    phrase(sep, prevent);
  }
}

/**
 * @Method: Returns a random adjective from the words list.
 * @Return {string}
 */
const adjective = (): string => {
  return adjectives[random(adjectives.length)];
};

/**
 * @Method: Returns a random color from the words list.
 * @Return {string}
 */
const color = (): string => {
  return colors[random(colors.length)];
};

/**
 * @Method: Returns a random animal from the words list.
 * @Return {string}
 */
const animal = (): string => {
  return animals[random(animals.length)];
};

/**
 * @Method: Returns a random number between 0 and max
 * @Return {number}
 */
const random = (max: number = 1): number => {
  return Math.floor(Math.random() * max);
};
