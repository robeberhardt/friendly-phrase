import { phrase } from '../../lib';

const spaceRegex = /([A-Z])\w+ ([A-Z])\w+ ([A-Z])\w+/g;
test('Test Phrase Generation - space delimited', () => {
  const friendly = phrase();
  expect(friendly).toBeDefined();
  expect(friendly).toMatch(spaceRegex);
});

const hyphenRegex = /([A-Z])\w+-([A-Z])\w+-([A-Z])\w+/g;
test('Test Phrase Generation - hyphen delimited', () => {
  const friendly = phrase('-');
  expect(friendly).toBeDefined();
  expect(friendly).toMatch(hyphenRegex);
});

const shortRegex = /([A-Z])\w+ ([A-Z])\w+/g;
test('Short Phrase Generation - space delimited', () => {
  const shortFriendly = phrase(' ', '', true);
  expect(shortFriendly).toBeDefined();
  expect(shortFriendly).toMatch(shortRegex);
});
