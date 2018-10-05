/* tslint:disable:no-console */

import { phrase, resetSeed, setSeed } from '../../lib';

test('Seeded random number generation', () => {
  const run1: string[] = [];
  const run2: string[] = [];
  const run3: string[] = [];
  const seedString = 'blarg';

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
