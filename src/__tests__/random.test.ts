/* tslint:disable:no-console */

import { phrase, resetSeed, setSeed } from '../../lib';

const seedString = 'blarg';

test('Seeded random number generation', () => {
  const run1: string[] = [];
  const run2: string[] = [];
  const run3: string[] = [];

  // set seed (overrides Math.random()) and generate five phrases
  setSeed(seedString);
  for (let i = 0; i < 5; i++) {
    run1.push(phrase());
  }

  // clear seed and generate five more phrases
  resetSeed();
  for (let i = 0; i < 5; i++) {
    run2.push(phrase());
  }

  // set seed to same string and generate five phrases again
  setSeed(seedString);
  for (let i = 0; i < 5; i++) {
    run3.push(phrase());
  }

  // all arrays should contain five phrases
  expect(run1).toHaveLength(5);
  expect(run2).toHaveLength(5);
  expect(run3).toHaveLength(5);

  // first and third (seeded) should match
  expect(run1).toEqual(run3);

  // first should not match second
  expect(run1).not.toEqual(run2);
});

test('test the duplicate prevention functionality', () => {
  // set the seed, and generate two phrases
  setSeed(seedString);
  const phrase1 = phrase();
  const phrase2 = phrase();

  console.log('phrase1: ', phrase1, 'phrase2: ', phrase2);

  // reset the seed, and generate a phrase
  resetSeed();
  const throwawayPhrase = phrase();
  console.log('throwaway phrase: ', throwawayPhrase);

  // set the seed to the same value as the first run
  // and generate a third phrase, passing the value
  // of the first phrase as the 'prevent' parameter
  setSeed(seedString);
  const preventPhrase = phrase(' ', phrase1);

  console.log('preventPhrase: ', preventPhrase);

  // preventPhrase should not equal phrase1,
  // and should equal phrase 2
  expect(preventPhrase).not.toEqual(phrase1);
  expect(preventPhrase).toEqual(phrase2);
});
