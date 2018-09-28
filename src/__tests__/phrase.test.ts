import { FriendlyPhrase } from '../../lib';

const spaceRegex = /([A-Z])\w+ ([A-Z])\w+ ([A-Z])\w+/g;
test('Test Phrase Generation - space delimited', () => {
  const phrase = FriendlyPhrase.phrase();
  expect(phrase).toBeDefined();
  expect(phrase).toMatch(spaceRegex);
});

const hyphenRegex = /([A-Z])\w+-([A-Z])\w+-([A-Z])\w+/g;
test('Test Phrase Generation - hyphen delimited', () => {
  const phrase = FriendlyPhrase.phrase('-');
  expect(phrase).toBeDefined();
  expect(phrase).toMatch(hyphenRegex);
});
