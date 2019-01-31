import seed from 'seed-random';

import { adjectives } from './words/adjectives';
import { animals } from './words/animals';
import { colors } from './words/colors';

/**
 * @Method: Returns a three-word passphrase with a separator string
 * between each word - order is adjective-color-animal
 * @param {string} [sep = ' '] - The separator charatcter
 * @param {string} [prevent = ''] - a matching string used
 * to prevent (very unlikely) duplicate results
 * @returns {string}
 */
export function phrase(sep: string = ' ', prevent: string = '', short: boolean = false): string {
  let result = `${color()}${sep}${animal()}`;
  if (!short) {
    result = `${adjective()}${sep}${result}`;
  }
  if (result !== prevent) {
    return String(result);
  } else {
    return phrase(sep, prevent);
  }
  throw new Error('shut up, compiler');
}

export function setSeed(seedString: string) {
  seed(seedString, { global: true });
}

export function resetSeed() {
  seed.resetGlobal();
}

/**
 * @Method: Returns a random adjective from the words list.
 * @returns {string}
 */
const adjective = (): string => {
  return adjectives[random(adjectives.length)];
};

/**
 * @Method: Returns a random color from the words list.
 * @returns {string}
 */
const color = (): string => {
  return colors[random(colors.length)];
};

/**
 * @Method: Returns a random animal from the words list.
 * @returns {string}
 */
const animal = (): string => {
  return animals[random(animals.length)];
};

/**
 * @Method: Returns a random number between 0 and max
 * @returns {number}
 */
const random = (max: number = 1): number => {
  return Math.floor(Math.random() * max);
};
